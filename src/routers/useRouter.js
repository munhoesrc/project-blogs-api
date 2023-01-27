// só para poder chamar no index
const express = require('express');
const { userController } = require('../controllers');
const validatingToken = require('../middlewares/validatingToken');

const router = express.Router();

router.post('/', userController.createUser);
router.get('/', validatingToken, userController.getAllUsers);

module.exports = router;