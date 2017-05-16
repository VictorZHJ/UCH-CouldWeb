<?php
session_start();

//檢查是不是 admin
if ($_SESSION["userid"]!= "admin") {
    die ('{"result":"fail"}');
}

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

$uid = $_REQUEST["userid"];
$upass = $_REQUEST["pass"];
$uname = $_REQUEST["username"];
$age = $_REQUEST["age"];
$phone = $_REQUEST["phone"];

//$sql = "SELECT userid, username FROM users where userid = '$uid' and pass = '$upass'";
$sql = "INSERT INTO `users`(`userid`, `pass`, `username`, `age`, `phone`) VALUES ('$uid', '$upass', '$uname', $age, '$phone')";
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
