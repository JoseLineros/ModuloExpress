const express = require('express');
const morgan = require('morgan');

// Importar la conexion a la base de datos
const dataBase = require('./dbConection');

//* Importar las rutas
const appRoutes = require('./routes/app.routes');

const app = express();

const port = 3000;

//Middleware
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use('/app', appRoutes);

// Ejecucion del APP
app.listen(port, () => {
	console.log(`App listening on port ${port}!`);
});
