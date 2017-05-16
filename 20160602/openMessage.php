<?php
header('Content-Type: text/event-stream');
header('Cache-Control: no-cache');

// $time = date('r');
// echo "data: The server time is: {$time}\n\n";

$myfile = fopen("messageFile/message.txt", "r") or die("Unable to open file!");
$fileContent = fread($myfile,filesize("messageFile/message.txt"));

$fileContent = str_replace("\n", "\ndata:", $fileContent);

echo "data:" . $fileContent . "\n\n";
fclose($myfile);

flush();
?>