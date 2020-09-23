//importando as dependecias do sqlite retornando um objeto
//funcao dentro de um objeto gera um metodo
const sqlite3 = require("sqlite3").verbose()

//iniciar o objeto que ira fazer operaçoes no banco de dados
const db = new sqlite3.Database("./src/database/database.db")

module.exports = db

// utilizar o objeto de banco de dados para nossas operaçoes
 db.serialize(() => {
    //criar uma tabela
     db.run(`
        CREATE TABLE IF NOT EXISTS places (
             id INTEGER PRIMARY KEY AUTOINCREMENT,
             image TEXT,
             name  TEXT,
             address TEXT,
             address2 TEXT,
             state TEXT,
             city TEXT,
             items TEXT
        );
     `)

})