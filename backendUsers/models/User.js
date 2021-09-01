const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema(
	{
		name: { type: String, required: true },
		lastName: { type: String, required: true },
		userName: { type: String, required: true },
		email: { type: String, required: true },
		phone: { type: String, required: true },
		password: { type: String, required: true },
	},
	{
		versionKey: false,
		timestamps: true,
	}
);

module.exports = mongoose.model('User', userSchema);
