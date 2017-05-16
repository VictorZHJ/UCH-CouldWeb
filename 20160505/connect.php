<?php
session_start();

include 'db.php';

$uid = $_REQUEST["uid"];
$upass = $_REQUEST["upass"];

$sql = "SELECT uid, uname, age, phone FROM users0505 where uid = '$uid' and upass = '$upass'";
$result = $conn->query($sql);

//echo $sql;

if ($result->num_rows > 0) {
    //表帳密正確，登入成功
    // 1. 將資料記錄到 session
    // 2. 輸出成功訊息 {"result":"ok"}
    $row = $result->fetch_assoc();
    $_SESSION["uid"] = $row["uid"];
    $_SESSION["uname"] = $row["uname"];
    $_SESSION["age"] = $row["age"];
    $_SESSION["phone"] = $row["phone"];
    
    echo ' {"result":"ok"}';
    
    
} else {
    //表帳密不正確，登入不成功
    // 2. 輸出  {"result":"fail"}
    echo '{"result":"fail"}';
}
$conn->close();
