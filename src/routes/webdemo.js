const express = require('express');
const router = express.Router();
const webdemoController = require('../app/controllers/WebDemoController');

router.get('/create', webdemoController.create);
router.post('/store', webdemoController.store);
router.get('/:slug', webdemoController.show);

module.exports = router;
