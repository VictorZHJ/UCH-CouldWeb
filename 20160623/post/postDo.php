<?php
session_start();

include 'db.php';

if ($_SESSION["userid"]==null || strlen($_SESSION["userid"]) == 0){
    //尚未登入成功時
    // 輸出 {"success": "fail", "message":"none"}
    echo '{"result": "fail", "message":"not login"}';
    return;
    
}

$userid = $_SESSION["userid"];

$title = $_REQUEST["title"];
$content = $_REQUEST["content"];

//$sql = "insert into post (userid, time, title, content, replyTo) values ('$userid', now(), '$title', '$content', 0)";
$sql = "insert into post (userid, time, title, content, replyTo) values ('$userid', now(), '$title', '$content', 0)";
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
