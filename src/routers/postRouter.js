// pra salvar o index
const express = require('express');
const { postController } = require('../controllers');
const validateToken = require('../middlewares/validatingToken');
const validatePost = require('../middlewares/validatePost');

const router = express.Router();

router.post('/', validateToken, validatePost, postController.create);

module.exports = router;
