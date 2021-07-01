const express = require("express");
const route = require("./routes.js");
const path = require("path");

const server = express();

server.set("view engine", "ejs");

server.use(express.static("public"));

/* Mudando o caminho da views */
server.set("views", path.join(__dirname, "views"));

server.use(express.urlencoded({ extended: true }));

server.use(route);

server.listen(3002, () => console.log("Rodando"));
