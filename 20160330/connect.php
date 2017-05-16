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

$uid = $_REQUEST["uid"];
$upass = $_REQUEST["upass"];

$sql = "SELECT userid, username FROM users where userid = '$uid' and pass = '$upass'";
$result = $conn->query($sql);

//echo $sql;

if ($result->num_rows > 0) {
    //表帳密正確，登入成功
    // 1. 將資料記錄到 session
    // 2. 重導向到歡迎頁面
    $row = $result->fetch_assoc();
    $_SESSION["uid"] = $row["userid"];
    $_SESSION["uname"] = $row["username"];
    
    header('Location: member.php');
    
    
} else {
    //表帳密不正確，登入不成功
    // 2. 顯示帳密錯誤，再自動導向或提供登入頁面連結
    echo '    <meta charset="UTF-8">';
    echo "帳密錯誤<br/>";
    echo "<a href='login.php'>登入頁面</a>";
}
$conn->close();
