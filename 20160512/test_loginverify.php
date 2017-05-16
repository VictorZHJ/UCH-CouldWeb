<?php
session_start();

include 'db.php';

$uid = $_REQUEST["uid"];
$upass = $_REQUEST["upass"];

if ($uid == "admin"){ 

    $sql = "SELECT userid, username FROM users where userid = '$uid' and pass = '$upass'";
    $result = $conn->query($sql);
    
    //echo $sql;
    
    if ($result->num_rows > 0) {
        //表帳密正確，登入成功
        // 1. 將資料記錄到 session
        // 2. 輸出成功訊息 {"result":"ok"}
        $row = $result->fetch_assoc();
        $_SESSION["uid"] = $row["userid"];
        $_SESSION["uname"] = $row["username"];
        
        echo ' {"result":"ok"}';
    
    }
    else {
        //表帳密不正確，登入不成功
        // 2. 輸出  {"result":"fail"}
        echo '{"result":"fail"}';
    }
    
} else {
    //表帳密不正確，登入不成功
    // 2. 輸出  {"result":"fail"}
    echo '{"result":"fail"}';
}
$conn->close();
