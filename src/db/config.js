const sqlite3 = require("sqlite3");
const { open } = require("sqlite");

/* filename: definindo o nome do banco de dados */
/* driver: quem comanda o banco de dados */
module.exports = () =>
  open({
    filename: "./src/db/rocketq.sqlite",
    driver: sqlite3.Database,
  });
