// Configuracion del puerto
require('./config/config');
// Paquetes Requeridos
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
// Procesar datos post con BodyParser
app.use(bodyParser.urlencoded({extended: false}));
// Parser convertir en JSON
app.use(bodyParser.json());
app.get('/usuario',(req, res) => {
	res.json('Hola Mundo desde get');
});
app.post('/usuario',(req, res) => {
	let body = req.body;
	if ( body.nombre === undefined) {
		res.status(400).json({
			ok: false,
			mensaje: 'El nombre es necesario'
		});
	}else{
		res.json({
			persona: body
		});
	}
});
app.put('/usuario/:id',(req, res) => {
	let id = req.params.id;
	res.json({
		id
	});
});
app.delete('/usuario',(req, res) => {
	res.json('Hola Mundo desde delete');
});
app.listen(process.env.PORT, () => console.log(`escuchando el puerto ${process.env.PORT}`));