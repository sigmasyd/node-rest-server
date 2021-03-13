const express = require("express");
const cors = require('cors');

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT

        //Middlewares
        this.middlewares();
        //Rutas de la aplicación
        this.routes();
    }
    middlewares() {
        // CORS
        this.app.use(cors());
        //Directorio público
        this.app.use(express.static('public'));
    }
    routes() {
        this.app.get('/api', (req, res) => {
            res.json({
                msg: "GET ..."
            });
        });
        this.app.put('/api', (req, res) => {
            res.status(400).json({
                msg: "PUT ..."
            });
        });
        this.app.post('/api', (req, res) => {
            res.status(201).json({
                msg: "POST ..."
            });
        });
        this.app.delete('/api', (req, res) => {
            res.json({
                msg: "DELETE ..."
            });
        });
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en el puerto: ${this.port}`);
        });
    }
}

module.exports = Server;