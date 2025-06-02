const express = require("express");
const cors = require("cors");
require("dotenv").config();
const db = require("./DB/Config.js");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.WEBPORT;
    this.WEBHOST=process.env.HOST;
    this.db = db;
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
    this.app.get("/empleados", (req, res) => {
      console.log("Se hizo la consulta");
      this.db.query("SELECT * FROM empleado", (err, results) => {
        if (err) {
          console.error("Error en la consulta:", err);
          return res.status(500).json({ error: err.message });
        }
        console.log("Resultados obtenidos:", results);
        res.json(results);
      });
    });

    // Ruta de prueba
    this.app.get("/ping", (req, res) => {
      res.send("pong");
    });
  }
   listen() {
    this.app.listen(this.port,this.WEBHOST, () => {
      console.log(`Server running on port http://${this.WEBHOST}:${this.port}`);
    });
  }
}
const server = new Server();
server.listen();
