<?php
error_reporting(E_ALL);
ini_set('display_errors', '1');

$db_hostname = "localhost";
$db_username = "User1";
$db_password = "Geheim123";
$db_database = "84834_back2";

$mysqli = mysqli_connect($db_hostname, $db_username, $db_password, $db_database);

if (!$mysqli) {
    echo "FOUT: geen connectie naar database. <br>";
    echo "Errno: " . mysqli_connect_errno() . "<br/>";
    echo "Error: " . mysqli_connect_error() . "<br/>";
    exit;
}
