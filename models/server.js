const express = require("express");
const cors = require('cors');
const { dbConnection } = require("../database/config");

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';

        // Conectar base de datos
        this.conectarDB();
        //Middlewares
        this.middlewares();
        //Rutas de la aplicación
        this.routes();
    }
    async conectarDB(){
        await dbConnection();
    }
    middlewares() {
        // CORS
        this.app.use(cors());
        // lectura y parseo del body
        this.app.use(express.json()); // convertir data a json para manejo interno
        //Directorio público
        this.app.use(express.static('public'));
    }
    routes() {
        this.app.use(this.usuariosPath,require('../routes/usuarios'));
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en el puerto: ${this.port}`);
        });
    }
}

module.exports = Server;