<?php
session_start();

$myfile = fopen("messageFile/message.txt", "a") or die("Unable to open file!");

$sender = "<" . $_SESSION["userid"] . ">";
$messageBeSent = $_REQUEST["messageBeSent"];

fwrite($myfile, $sender . "\n");
fwrite($myfile, $messageBeSent . "\n\n");
fclose($myfile);

echo ' {"result":"ok"}';
