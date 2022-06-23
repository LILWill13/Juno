const router = require('express').Router();

const user = require('./User-Routes')
const home = require('./Home-Routes')

router.use('/user', user )
router.use('/home', home )

module.exports = router;