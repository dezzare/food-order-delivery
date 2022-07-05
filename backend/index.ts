import "reflect-metadata";
import { DataSource } from "typeorm";
import express, { Application } from "express";
import Router from "./routes"
import dbConfig from "./config/database";

const PORT = process.env.PORT || 5000;

const app: Application = express();

app.use(express.json());
app.use(express.static("public"));

app.use(Router)

export const dataSource = new DataSource(dbConfig);
dataSource.initialize()
  .then((_connection) => {
    app.listen(PORT, () => {
      console.log(`Servidor rodando em: http://localhost:${PORT}`)
    })
  })
  .catch((err) => {
    console.log("Não foi  possível conectar. ", err);
    process.exit(1);
  });
