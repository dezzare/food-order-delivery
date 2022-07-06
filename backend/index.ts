import "reflect-metadata";
import { DataSource } from "typeorm";
import express, { Application } from "express";
import Router from "./routes"
import dbConfig from "./config/database";
import { fakeDB } from "./fakedb";

const PORT = process.env.PORT || 5000;

const app: Application = express();

app.use(function(_req, res, next) {
  //Enabling CORS
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x - client - key, x - client - token, x - client - secret, Authorization");
  next();
});
app.use(express.json());
app.use(express.static("public"));

app.use(Router)

export const dataSource = new DataSource(dbConfig);

dataSource.initialize()
  .then((_connection) => {
    app.listen(PORT, () => {
      console.log(`Servidor rodando em: http://localhost:${PORT}`)
      fakeDB()
    })
  })
  .catch((err) => {
    console.log("Não foi  possível conectar. ", err);
  });

