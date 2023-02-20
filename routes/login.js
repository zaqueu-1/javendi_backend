const router = require('express').Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { User: UserModel } = require('../models/User')


router.post('/login', async (req, res) => {
    
    const user = await UserModel.findOne({ userEmail: req.body.userEmail })

    if (!user) {
        return res.status(400).send('Email ou senha incorretos!')
    } 

    const validPassword = await bcrypt.compare(req.body.userPass, user.userPass)

    if (!validPassword) {
        return res.status(401).json('Email ou senha incorretos!')
    }

    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET)

    res.set({
        'auth-token': token,
        'user-id': user._id
      }).send({ token, userId: user._id });
      
})
        
module.exports = router;
