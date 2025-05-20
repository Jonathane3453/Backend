const express = require('express');
const cors = require('cors');
require('dotenv').config();
const {dbconnection} = require('./DB/Config.js');

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.WEBPORT;
        this.dbconnection = dbconnection();
        this.middlewares();
        this.routes();
    }

    middlewares() {
        // CORS
        this.app.use(cors());
        // Body parser
        this.app.use(express.json());
    }

    routes() {
       this.app.get("/empleados/update", (req, res) => {
            db.query("select * from empleados", (err, results) => {
            if (err) return res.status(500).json({ error: err });
            res.json(results);
            });
        });
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server running on port ${this.port}`);
        });
    }
}
const server = new Server();
server.listen();
