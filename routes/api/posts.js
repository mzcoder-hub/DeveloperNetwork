const express = require('express');
const router = express.Router();
// @Route  Get api/post
// @desc   Test Route
// @access Public
router.get('/', (req, res) => res.send('Posts Route'));

module.exports = router;
