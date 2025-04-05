const basededatos = require('sqlite3').verbose();
const db = new basededatos.Database('./database.db');

//crear una tabla "si es que no existe"
db.serialize(() => {
    db.run(`
        CREATE TABLE IF NOT EXISTS tareas (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            texto TEXT NOT NULL,
            fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    `);
});

// Exportar la base de datos
module.exports = db;