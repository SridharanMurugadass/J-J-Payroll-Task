const express = require('express');
const router = express.Router();

const postControllers = require('../controllers/postControllers');

router.get('/',postControllers.home);

module.exports = router;