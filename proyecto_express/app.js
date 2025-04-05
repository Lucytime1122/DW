//levantamos el servidor
const express = require('express');
const app = express();
const PORT = 3000;

//CONECTAMOS A DB
const db = require('./db');

// Configurar el ejs
app.set('view engine', 'ejs');
app.set('views', './views');

// Configurar la base de datos
app.use(express.urlencoded({ extended: true }));

// Ruta principal
app.get('/', (req, res) => {
    db.all('SELECT * FROM tareas ORDER BY fecha DESC', (err, tareas) => {
        if (err) return res.send('Error de carga');
        res.render('index', { title: 'Inicio', tareas });
    });
});

//ruta para guardar las tareas
app.post('/crear', (req, res) => {
    const { texto } = req.body;
    db.run('INSERT INTO tareas (texto) VALUES (?)', [texto], function (err) {
        if (err) {
            return res.send('Error al guardar la tarea');
        }
        res.redirect('/');
    });
});
// Iniciamos el servidor
app.listen(PORT, () => {
    console.log(`Iniciamos servidor en: http://localhost:${PORT}/`);
});