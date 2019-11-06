const express = require('express');
const jwt = require('jwt-simple');
var router = express.Router();

router.post('/login', (req, res) => {
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Expose-Headers", "author");
    console.log('req.headers.author', req.headers.author);
    var user = req.body.user;
    var token = jwt.encode({
        userId: '123456',
        age: 20
    },'key')
    console.log(token);
    res.header('author', token);
    res.json({msg:'login success!', code: 1})
})
router.get('/home', (req, res) => {

    console.log('home-req-headers-author');
    res.json({msg:'home', code:1})
})


module.exports = router