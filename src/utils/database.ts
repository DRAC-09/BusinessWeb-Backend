import dotenv from 'dotenv';                       // para gestionar las variables de entorno
import mongoose from 'mongoose';                   // para gestionar la conexion con la base de datos


dotenv.config();                                  // cargar las variables de entorno   


const db = process.env.mongo_db || '';                      
const user = process.env.mongo_username || '';                      
const pass = process.env.mongo_password || '';                      
const url =`mongodb+srv://${user}:${pass}@businessweb.eijqzar.mongodb.net/${db}`;



export class Database{
     constructor(){
          this.conectar();
     }     
     conectar(){
          mongoose
          .connect(url)               
          .then(result=>console.log('Conectado a la MongoDB Atlas'))
          .catch(err=>console.log(err));
     }
}






