const express = require('express');
const router = express.Router();
const handlers = require('../handlers');

router.get('/', handlers.homepage.get);

module.exports = router;
