const app = require("./app");
const http = require("http")
require("dotenv").config();

const PORT = process.env.PORT;
const server = http.createServer(app)

server.listen(3000, () => {
    console.log(`Serveur lancé sur le port ${PORT}`);
    console.log("Connexion à la base de donnée réussie");
});