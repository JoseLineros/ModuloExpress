//* Requerir el modelo
const User = require('../models/User');

const appController = {};

appController.createUser = async (req, res) => {
	try {
		const newUser = new User({
			name: req.body.name,
			lastName: req.body.lastName,
			userName: req.body.userName,
			email: req.body.email,
			phone: req.body.phone,
			password: req.body.password,
		});

		await newUser.save();
		res.status(200).json({ message: 'Usuario creado!' });
	} catch (error) {
		console.log(error);
		res.status(400).json({
			message: 'Error al crear usuario',
			error: error,
		});
	}
};

appController.updateUser = async (req, res) => {
	try {
		const id = req.params.userId;
		const obj = req.body;
		const updated = await User.findByIdAndUpdate(id, obj, { new: true });

		console.log(updated);

		if (updated) {
			res.status(200).json({
				message: 'usuario actualizado!',
				person: updated,
			});
		} else {
			res.status(401).json({ message: 'User not exist' });
		}
	} catch (error) {
		console.log(error);
		res.status(400).json({
			message: 'Error',
			error: error,
		});
	}
};

appController.deleteUser = async (req, res) => {
	try {
		const id = req.params.userId;
		const deleted = await User.findByIdAndDelete(id);

		console.log(deleted);

		if (deleted) {
			res.status(200).json({ message: 'Usuario Eliminado!' });
		} else {
			res.status(401).json({ message: 'Usuario no existe' });
		}
	} catch (error) {
		console.log(error);
		res.status(400).json({
			message: 'Error',
			error: error,
		});
	}
};

appController.getUserById = async (req, res) => {
	try {
		const id = req.params.userId;
		const user = await User.findById(id);

		console.log(user);

		if (user) {
			res.status(200).json({
				message: 'Usuario encontrado!',
				user: user,
			});
		} else {
			res.status(401).json({ message: 'Usuario no existe' });
		}
	} catch (error) {
		console.log(error);
		res.status(400).json({
			message: 'Error',
			error: error,
		});
	}
};

appController.getUsers = async (req, res) => {
	try {
		const users = await User.find();

		console.log(users);

		if (users) {
			res.status(200).json({
				message: 'Usuario encontrado!',
				users: users,
			});
		} else {
			res.status(401).json({ message: 'Usuarios vacios' });
		}
	} catch (error) {
		console.log(error);
		res.status(400).json({
			message: 'Error',
			error: error,
		});
	}
};

appController.getUserByName = async (req, res) => {
	try {
		const name = req.params.name;
		// const name = 'Michael';
		const user = await User.find({
			// name: new RegExp('^' + name + '$', 'i'),
			name: name,
		});

		// const user = await User.find();

		console.log(user);

		if (user) {
			res.status(200).json({
				message: `Concidencia encontrada! ${name}`,
				user: user,
			});
		} else {
			res.status(401).json({ message: 'Usuario no existe' });
		}
	} catch (error) {
		console.log(error);
		res.status(400).json({ message: 'Error', error: error });
	}
};

module.exports = appController;
