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

$userid = $_REQUEST["userid"];
$pass = $_REQUEST["pass"];
$username = $_REQUEST["username"];
$age = $_REQUEST["age"];
$phone = $_REQUEST["phone"];

//$sql = "SELECT userid, username FROM users where userid = '$uid' and pass = '$upass'";
$sql = "insert into users (userid, pass, username, age, phone) values ('$userid', '$pass', '$username', $age, '$phone')";
$result = $conn->query($sql);

//echo $sql;

if ($result === true) {
    //表註冊成功
    echo ' {"result":"ok"}';

} else {
    //表註冊不成功
    // 2. 輸出  {"result":"fail"}
    echo '{"result":"fail"}';
}
$conn->close();
