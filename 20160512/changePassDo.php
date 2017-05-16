<?php
session_start();

include 'db.php';

$uid = $_SESSION["uid"];
$old_pass = $_REQUEST["old_pass"];
$new_pass = $_REQUEST["new_pass"];


//$sql = "SELECT userid, username FROM users where userid = '$uid' and pass = '$upass'";
$sql = "update users set upass='$new_pass' where uid = '$uid' and upass='$old_pass' ";
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
