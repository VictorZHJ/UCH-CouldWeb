<?php

//echo "hi";

// 接收 前端送來的參數
$a = $_REQUEST["a"];
$b = $_REQUEST["b"];

if ($b == "M")
{
    $result = "$a 先生，您好!";
}
elseif ($b == "F") {
     $result = "$a 小姐，您好!";
}
else {
     $result = "資料輸入錯誤!!";
}


// 回應
echo  $result;
?>
