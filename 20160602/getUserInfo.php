<?php
session_start();


if ($_SESSION["uid"]==null || strlen($_SESSION["uid"]) == 0){
    //尚未登入成功時
    // 輸出 {"success": "fail", "message":"none"}
    echo '{"result": "fail", "data":"none"}';
    
}
else {
    //有登入時    
    // 輸出 {"success": "ok", "message":{"uname":"XXX", "uid":"XXX"} }
    echo '{"result": "ok", "data":{"uname":"' . $_SESSION["uname"] . '", "uid":"' . $_SESSION["uid"] . '"} }';
}
