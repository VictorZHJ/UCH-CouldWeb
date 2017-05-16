<?php
session_start();

include 'db.php';

$uid = $_SESSION["uid"];
$uname = $_REQUEST["uname"];
$age = $_REQUEST["age"];
$phone = $_REQUEST["phone"];


//$sql = "SELECT userid, username FROM users where userid = '$uid' and pass = '$upass'";
$sql = "update users set username='$uname', age=$age, phone='$phone' where userid = '$uid' ";
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
