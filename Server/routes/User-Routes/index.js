const router = require('express').Router();
const {createUser} = require('../../controllers/user')

router.route('/signup').post(createUser);

module.exports = router