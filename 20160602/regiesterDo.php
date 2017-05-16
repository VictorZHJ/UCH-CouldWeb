<?php
session_start();

include 'db.php';

$uid = $_REQUEST["uid"];
$upass = $_REQUEST["upass"];
$uname = $_REQUEST["uname"];
$age = $_REQUEST["age"];
$phone = $_REQUEST["phone"];

//$sql = "SELECT userid, username FROM users where userid = '$uid' and pass = '$upass'";
$sql = "   insert into users (userid, pass, username, age, phone) values ('$uid', '$upass', '$uname', $age, '$phone')";
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
