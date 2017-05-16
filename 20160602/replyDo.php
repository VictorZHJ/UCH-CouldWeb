<?php
session_start();

include 'db.php';

if ($_SESSION["uid"]==null || strlen($_SESSION["uid"]) == 0){
    //尚未登入成功時
    // 輸出 {"success": "fail", "message":"none"}
    echo '{"result": "fail", "message":"not login"}';
    return;
    
}

$uid = $_SESSION["uid"];

$replyTo = $_REQUEST["replyTo"];
$content = $_REQUEST["content"];

//$sql = "insert into post (userid, time, title, content, replyTo) values ('$uid', now(), '$title', '$content', 0)";
$sql = "insert into post (userid, time, title, content, replyTo) values ('$uid', now(), '', '$content', $replyTo)";
$result = $conn->query($sql);

//echo $sql;

if ($result === true) {
    //表註冊成功
    echo '{"result": "ok", "message":"post ok"}';

} else {
    //表註冊不成功
    // 2. 輸出  {"result":"fail"}
    echo '{"result": "fail", "message":"post fail"}';
}
$conn->close();
