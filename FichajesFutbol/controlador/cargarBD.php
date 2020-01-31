<?php

$servidor = "localhost";
$username = "user";
$password = "";
$basedatos = "futbol";

# Crear conexión
$conn = mysqli_connect($servidor, $username, $password, $basedatos);

# Comprobar conexión
if (!$conn) {
    die("Conexi&ocacuten fallida: " . mysqli_connect_error());
}

#Se crea la consulta
$consulta = "SELECT * FROM futbolistas";
$resultado = mysqli_query($conn,$consulta);

#me guardo el resultado y lo parseo a json, el resultado tambien me lo pueden pasar como texto
$fila = mysqli_fetch_all($resultado);
$parseado = json_encode($fila);

#hay que hacer un echo despues del parseado para que el ajax pueda recogerlo, sino saltara el error
echo $parseado;
mysqli_close($conn);
                        

?>