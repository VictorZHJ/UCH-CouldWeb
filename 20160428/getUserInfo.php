<?php
session_start();


if ($_SESSION["email"]==null || strlen($_SESSION["email"]) == 0){
    //尚未登入成功時
    // 輸出 {"success": "fail", "message":"none"}
    echo '{"result": "fail", "data":"none"}';
    
}
else {
    //有登入時    
    // 輸出 {"success": "ok", "message":{"uname":"XXX", "email":"XXX"} }
    echo '{"result": "ok", "data":
        {"uid":"' . $_SESSION["uid"] . '", "acc":"' . $_SESSION["acc"] . '",
         "name":"' . $_SESSION["name"] . '", "nickname":"' . $_SESSION["nickname"] . '",
         "email":"' . $_SESSION["email"] . '"} }';
}
