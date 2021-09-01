const mongoose = require('mongoose');

const url = 'conexion';

mongoose
	.connect(url, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		// useFindAndModify: false,
	})
	.then((db) => {
		return console.log('Base de datos conectada');
	})
	.catch((error) => {
		console.log(error);
	});

module.exports = mongoose;