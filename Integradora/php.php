<?php
$servername = "localhost";
$username = "root";
$password = "1205"; 
$dbname = "comercio";

// Crear conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar la conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

// Obtener los datos del formulario
$nombre = $_POST['nombre'];
$email = $_POST['email'];
$fecha = $_POST['fecha'];
$hora = $_POST['hora'];

// Insertar los datos en la tabla Citas
$sql = "INSERT INTO Citas (nombre, email, fecha, hora) VALUES ('$nombre', '$email', '$fecha', '$hora')";

if ($conn->query($sql) === TRUE) {
    echo "Cita agendada correctamente.";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
