<?php
$conexion = new mysqli('synapse.bravoutd.com', 'bravout1_usynapse', 'C@n3s4_2024.', 'bravout1_synapse');

// Verificar la conexión
if ($conexion->connect_error) {
    die('Error de conexión: ' . $conexion->connect_error);
} else {
    echo 'Conectado a la base de datos';
}

// Consulta para insertar datos
$insertarCita = "INSERT INTO citas (Estado, Fecha) VALUES ('Mx', '2024-10-09')";
if ($conexion->query($insertarCita) === TRUE) {
    echo 'Datos insertados correctamente';
} else {
    echo 'Error al insertar cita: ' . $conexion->error;
}

// Consulta para obtener los datos
$citas = "SELECT * FROM citas";
$resultado = $conexion->query($citas);

if ($resultado->num_rows > 0) {
    // Imprimir los datos
    while($fila = $resultado->fetch_assoc()) {
        print_r($fila);
    }
} else {
    echo 'No se encontraron citas';
}

$conexion->close();
?>