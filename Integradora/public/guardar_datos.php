<?php
// Configuración de la conexión a la base de datos
$servername = "synapse.bravoutd.com";
$username = "bravout1_usynapse";
$password = "C@n3s4_2024.";
$dbname = "bravout1_synapse";

// Crear la conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar la conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

// Obtener los datos del formulario
$nombre = $_POST['nombre'];
$correo = $_POST['correo'];
$fecha = $_POST['fecha'];
$hora = $_POST['hora']; 

// Preparar y ejecutar la consulta
$sql = "INSERT INTO dates (nombre, correo, fecha, hora) VALUES ('$nombre', '$correo', '$fecha', '$hora')";

if ($conn->query($sql) === TRUE) {
    echo "Registro exitoso";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

// Cerrar la conexión
$conn->close();
?>
