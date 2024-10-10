let mysql = require('mysql');

let conexion = mysql.createConnection({
    host: 'synapse.bravoutd.com',
    user: 'bravout1_usynapse',
    password: 'C@n3s4_2024.',
    database: 'bravout1_synapse'
    });

conexion.connect(function(err){
    if(err){
        return console.error('error de conexion: ' + err);
        }else{
            console.log('conectado a la base de datos');
         }
});

const insertarCita = "INSERT INTO citas (Estado, Fecha) VALUES ('Mx', '2024-10-09')";
conexion.query(insertarCita, function(error, rows){
    if(error){
        return console.error('error al insertar la cita: ' + error);
        }else{
            console.log('Datos insertados correctamente');
            }
            })
       
const citas = "SELECT * FROM citas";

    conexion.query(citas, function(error, lista){
        if(error){
            return console.error('error al obtener la lista de citas: ' + error);
                 }else{
                     console.log(lista);
     }
});
            


conexion.end();



