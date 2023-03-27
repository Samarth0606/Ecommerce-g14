const express = require('express');
const User = require('../models/user');
const router = express.Router();


router.get('/fakeuser' , async(req,res)=>{
    const user = {
        email: 'samarth@gmail.com' , 
        username: 'Sam'
    }
    await User.register(user , 'sam123');
    res.send(user);
})


module.exports = router;