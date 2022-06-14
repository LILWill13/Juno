const router = require('express').Router();

const user = require('./User-Routes')

router.use('/user', user )

module.exports = router;