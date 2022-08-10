const express = require('express');                              // peticiones y Archivos.
const dotenv = require('dotenv');                                // definir variables de Entorno.
var cors = require('cors');                                      // para gestionar politicas de dominios cruzados
var bodyParser = require('body-parser');                         // leer parametros a través de post.
var Database = require('./modules/database');                    // importar la clase Database.

dotenv.config();                                                 // cargar archivo .env

const app = express();                                           // create express app
const port = process.env.PORT;                                   // obtener port del archivo .env     

app.use(cors());                                                 // cargar politicas de dominios cruzados                             
app.use(bodyParser.json());                                      // cargar parametros a través de post.
app.use(bodyParser.urlencoded({ extended: true }));              // cargar parametros a través de post.



app.get('/', (req, res) => {
     res.send('Express + TypeScript Server');
});

app.listen(port, () => {
     console.log(`Servidor iniciado en https://localhost:${port}`);
});