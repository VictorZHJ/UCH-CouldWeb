<?php
session_start();

include 'db.php';

if ($_SESSION["userid"]==null || strlen($_SESSION["userid"]) == 0){
    //尚未登入成功時
    // 輸出 {"success": "fail", "message":"none"}
    echo '{"result": "fail", "data":"none"}';
    return;
    
}

$sql = "select pno, userid, time, title from post where replyTo=0 ";
$result = $conn->query($sql);

//$sth = mysqli_query("SELECT ...");
$rows = array();

while($r = $result->fetch_assoc()) {
    $rows[] = $r;
}
$resultInJSON = json_encode($rows);

//有登入時    
// 輸出 {"success": "ok", "message":{"uname":"XXX", "userid":"XXX"} }
echo '{"result": "ok", "data":'. $resultInJSON. ' }';

