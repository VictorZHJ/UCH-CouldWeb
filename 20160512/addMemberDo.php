<?php
session_start();

//檢查是不是 admin
if ($_SESSION["uid"]!= "admin") {
    die ('{"result":"fail"}');
}

include 'db.php';

$uid = $_REQUEST["uid"];
$upass = $_REQUEST["upass"];
$uname = $_REQUEST["uname"];
$age = $_REQUEST["age"];
$phone = $_REQUEST["phone"];

//$sql = "SELECT userid, username FROM users where userid = '$uid' and pass = '$upass'";
$sql = "   INSERT INTO `users`(`uid`, `upass`, `uname`, `age`, `phone`) VALUES ('$uid', '$upass', '$uname', $age, '$phone')";
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
