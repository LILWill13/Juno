const { User } = require('../models')

const { signToken } = require('../utils/auth');

module.exports = {

    async createUser(req, res) {
        const user = User.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            birthday: req.body.birthday,
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
        });

        if(!user) {
            return res.status(400).send('blue');
        }
        const token = signToken(user);

        return res.json({token, user, status: 200})
    },

    async login(req, res) {      
        const user = await User.findOne({ email: req.body.email });
        
        if (!user) {
        return res.status(400);
        }
    
        const correctPw = await user.isCorrectPassword(req.body.password);
    
        if (!correctPw) {
        return res.status(400);
        }
        const token = signToken(user);
        res.json({ token, user });
    },

}