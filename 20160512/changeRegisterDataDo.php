<?php
session_start();

//檢查是不是 admin
if ($_SESSION["uid"]!= "admin") {
    die ('{"result":"fail"}');
}

include 'db.php';

$uid = $_REQUEST["uid"];
$uname = $_REQUEST["uname"];
$upass = $_REQUEST["upass"];
$age = $_REQUEST["age"];
$phone = $_REQUEST["phone"];


//$sql = "SELECT userid, username FROM users where userid = '$uid' and pass = '$upass'";
$sql = "update users set upass='$upass', uname='$uname', age=$age, phone='$phone' where uid = '$uid' ";
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
