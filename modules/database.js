var mongoose = require('mongoose');                                   // mongoose para mongodb.
require ('dotenv').config();                                          // definir variables de Entorno.



// Conexion a MongoDB Atlas
class Database{
     constructor(){
          //Promesas
          mongoose.connect(process.env.mongo_BusinessWeb)             // Para leer las variables de entorno
          .then(()=>{                                                 
               console.log('Se conecto a mongoDB Atlas');             // Si se conecto a la base de datos
          }).catch((error)=>{
               console.log(error);                                    // Si no se conecto a la base de datos
          });
     }
}

module.exports = new Database();                                      // exportar la clase Database.