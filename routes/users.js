var express = require('express');
var router = express.Router();
var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })
console.log(typeof multer)
/* GET home page. */
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.cookie('username', 'lisi', {maxAge:1000*60*5});
  res.cookie('password', '123456', {expires: new Date(Date.now()+1000*60*8)});
  res.send('respond with a resource');
});
router.get('/login', function(req, res){
  res.cookie('name','zhangsan',{
    maxAge: 1000*60*10
  })
  res.render('login.ejs', {username:'luoqi',password:'123'});
  res.end();
})
router.post('/center', function(req, res, next) {
  var username = req.body.username;
  var password = req.body.password;
  console.log(username, password)
  res.render('index', { title: 'Express' , username, password })
});
router.post('/upload', upload.single('file'), (req, res) => {
  console.log(req.file)
  // res.cookie('name', `zhangsan; max-age=${1000*60*60}`)
  res.send('upload success!')
})

module.exports = router;
