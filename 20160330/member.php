<?php
session_start();

if ($_SESSION["uid"]==null || strlen($_SESSION["uid"]) == 0){
    header('Location: login.php');
}

?>
<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
</head>

<body>

<?php
// Echo session variables that were set on previous page
echo $_SESSION["uname"] . "，歡迎您!!<br>";
?>

</body>
</html>