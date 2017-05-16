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

$userid = $_REQUEST["userid"];


$sql = "DELETE FROM users WHERE userid = '$userid' ";
$result = $conn->query($sql);


if ($result === true and $conn->affected_rows >0) {
    //表註冊成功
    echo ' {"result":"ok"}';

} else {
    //表註冊不成功
    // 2. 輸出  {"result":"fail"}
    echo '{"result":"fail"}';
}
$conn->close();
