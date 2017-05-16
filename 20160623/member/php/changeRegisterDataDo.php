<?php
session_start();

//資料庫連線
$servername = "0.0.0.0";
$username = "victorzhj";
$password = "";
$dbname = "test2";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);


// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

//設定 utf8 編碼
$conn->query("SET NAMES 'UTF8'");

$userid = $_SESSION["userid"];
$username = $_REQUEST["username"];
$age = $_REQUEST["age"];
$phone = $_REQUEST["phone"];


//$sql = "SELECT userid, username FROM users where userid = '$uid' and pass = '$upass'";
$sql = "update users set username='$username', age=$age, phone='$phone' where userid = '$userid' ";
$result = $conn->query($sql);

//echo $sql;

if ($result === true and $conn->affected_rows >0) {
    //表註冊成功
    $sql = "SELECT userid, username, age, phone FROM users where userid = '$userid'";
    $result = $conn->query($sql);
    if ($result->num_rows > 0) {
    //表帳密正確，登入成功
    // 1. 將資料記錄到 session
    // 2. 輸出成功訊息 {"result":"ok"}
    $row = $result->fetch_assoc();
    $_SESSION["userid"] = $row["userid"];
    $_SESSION["username"] = $row["username"];
    $_SESSION["age"] = $row["age"];
    $_SESSION["phone"] = $row["phone"];
    
    echo ' {"result":"ok"}';
    
        
    } else {
        //表帳密不正確，登入不成功
        // 2. 輸出  {"result":"fail"}
        echo '{"result":"fail"}';
    }

    

} else {
    //表註冊不成功
    // 2. 輸出  {"result":"fail"}
    echo '{"result":"fail"}';
}
$conn->close();
