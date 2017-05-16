<?php

//資料庫連線
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

//設定 utf8 編碼
$conn->query("SET NAMES 'UTF8'");