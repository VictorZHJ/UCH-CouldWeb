<?php
session_start();

include 'db.php';

if ($_SESSION["uid"]==null || strlen($_SESSION["uid"]) == 0){
    //尚未登入成功時
    // 輸出 {"success": "fail", "message":"none"}
    echo '{"result": "fail", "data":"none"}';
    return;
    
}

$pno = $_REQUEST["pno"];

$sql = "select pno, users.userid, users.username, time, title,content from post, users where replyTo=0 and post.userid = users.userid and pno=$pno ";
$result = $conn->query($sql);

//$sth = mysqli_query("SELECT ...");
$rows = array();

while($r = $result->fetch_assoc()) {
    $rows[] = $r;
}
$resultInJSON = json_encode($rows);

//有登入時    
// 輸出 {"success": "ok", "message":{"uname":"XXX", "uid":"XXX"} }
echo '{"result": "ok", "data":'. $resultInJSON. ' }';

