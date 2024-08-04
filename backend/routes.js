const express = require('express');
const router=express.Router();
const userController= require('./src/userController');

router.route('/user/create').post(userController.createUser);

module.exports = router;
