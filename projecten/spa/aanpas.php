<?php
require 'config.inc.php';

$id = htmlentities($_POST["id"], ENT_QUOTES);
$aanpasComplete = htmlentities($_POST["aanpasComplete"], ENT_QUOTES);
$result = mysqli_query($mysqli, "UPDATE `todo` SET `complete` = '$aanpasComplete' WHERE `id` = '$id'");

if($result){
    echo "OK";
    unset($_POST);
} else {
    echo "FOUT";
    unset($_POST);
}