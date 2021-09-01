const express = require('express');
const router = express.Router();

//* Controladores
const appController = require('../controllers/app.controller');

router.post('/createUser', appController.createUser);
router.put('/updateUser/:userId', appController.updateUser);
router.delete('/deleteUser/:userId', appController.deleteUser);
router.get('/getUserById/:userId', appController.getUserById);
router.get('/getUsers', appController.getUsers);
router.get('/getUserByName/:name', appController.getUserByName);

module.exports = router;
