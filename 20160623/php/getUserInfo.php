<?php
session_start();


if ($_SESSION["userid"]==null || strlen($_SESSION["userid"]) == 0){
    //尚未登入成功時
    // 輸出 {"success": "fail", "message":"none"}
    echo '{"result": "fail", "data":"none"}';
    
}
else {
    //有登入時    
    // 輸出 {"success": "ok", "message":{"uname":"XXX", "email":"XXX"} }
    echo '{"result": "ok", "data":
        {"userid":"' . $_SESSION["userid"] . '", "pass":"' . $_SESSION["pass"] . '",
         "username":"' . $_SESSION["username"] . '", "age":"' . $_SESSION["age"] . '",
         "phone":"' . $_SESSION["phone"] . '"} }';
}
