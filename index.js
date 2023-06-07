import connection from "./database/connection.js";

connection
    .authenticate()
    .then(() => {
        console.log("Rodando");
    }).catch((err) => {
        console.log(err);
    })
