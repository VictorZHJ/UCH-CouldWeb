<?php
session_start();

$servername = "0.0.0.0";
$username = "victorzhj";
$password = "";
$dbname = "test";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);


// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$conn->query("SET NAMES 'UTF8'");

$email = $_REQUEST["email"];
$password = $_REQUEST["password"];

$sql = "SELECT email, username FROM users where email = '$email' and password = '$password'";
$result = $conn->query($sql);

//echo $sql;

if ($result->num_rows > 0) {
    //表帳密正確，登入成功
    // 1. 將資料記錄到 session
    // 2. 輸出成功訊息 {"result":"ok"}
    $row = $result->fetch_assoc();
    $_SESSION["email"] = $row["email"];
    $_SESSION["uname"] = $row["username"];
    
    echo ' {"result":"ok"}';
    
    
} else {
    //表帳密不正確，登入不成功
    // 2. 輸出  {"result":"fail"}
    echo '{"result":"fail"}';
}
$conn->close();
