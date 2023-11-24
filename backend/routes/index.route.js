
const express = require('express');
const router = express.Router();
const formRoute = require('./form.route');

router.use("/form",formRoute)

module.exports = router