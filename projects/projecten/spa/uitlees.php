<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

require ('config.inc.php');
if ($result = $mysqli -> query("SELECT * FROM todo")) {
    $data = [];

    while ($row = mysqli_fetch_array($result)){
        $data[] = $row;
    }
    echo json_encode($data);
}else{
    echo("Query op tabel todo wordt niet uitgevoerd.");
}
?>
