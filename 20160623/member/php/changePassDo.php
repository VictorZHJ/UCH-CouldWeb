<?php
session_start();

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

$conn->query("SET NAMES 'UTF8'");

$userid = $_SESSION["userid"];
$old_pass = $_REQUEST["oldpass"];
$new_pass = $_REQUEST["newpass"];


//$sql = "SELECT userid, username FROM users where userid = '$uid' and pass = '$upass'";
$sql = "update users set pass='$new_pass' where userid = '$userid' and pass='$old_pass' ";
$result = $conn->query($sql);

//echo $sql;

if ($result === true and $conn->affected_rows >0) {
    //表註冊成功
    echo ' {"result":"ok"}';

} else {
    //表註冊不成功
    // 2. 輸出  {"result":"fail"}
    echo '{"result":"fail"}';
}
$conn->close();
