const express = require('express');
const app = express();
const port = 3000; //El puerto se puede cambiar según las necesidades

// Se le indica a express que va a recibir json
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hola Mundo!!! usando Express, sí se levanto mi server!');
});

//ruta ejemplo tipo POST
app.post('saludo', (req, res) => {
    const nombre = "Dany Flow";
    res.send('Hola, ${nombre}');
});

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});