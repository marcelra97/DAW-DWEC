<?php

$servidor = "localhost";
$username = "user";
$password = "user";
$basedatos = "futbol";

$posicion = $_POST["posicion"];
$id = $_POST["id"];

# Crear conexión
$conn = mysqli_connect($servidor, $username, $password, $basedatos);


# Comprobar conexión
if (!$conn) {
    die("Conexi&ocacuten fallida: " . mysqli_connect_error());
}

#Se crea la consulta
$consulta = "UPDATE futbolistas  SET posicion = '".$posicion."' WHERE _idjugador = ".$id." ";
$resultado = mysqli_query($conn,$consulta);



mysqli_close($conn);
                        

?>