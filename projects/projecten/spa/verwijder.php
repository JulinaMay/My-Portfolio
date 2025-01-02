<?php
require "config.inc.php";

$invoer = htmlentities($_POST["id"], ENT_QUOTES);
$result = mysqli_query($mysqli, "DELETE FROM `todo` WHERE `todo`.`id` = ".$invoer);
if ($result) {
    echo "OK";
} else {
    echo "FOUT";
}
?>
