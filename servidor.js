import express from "express"
import http, { Server } from "http"

const aplicativo = express();
const servidor = http.createServer(aplicativo);

aplicativo.use(express.static("public"));

servidor.listen(3000, () => {
    console.log("> Servidor ouvindo na porta: 3000")
});