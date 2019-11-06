var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require('fs');
var multer = require('multer');

var createFolder = function (folder) {
  try{
    fs.accessSync(folder)
  }catch(e){
    fs.mkdirSync(folder)
  }
}
createFolder('./loads/')
var storage = multer.diskStorage({
   destination: (req, file, cb) => {
      cb(null, './loads/')
   },
   filename: (req, file, cb) => {
      
      cb(null, path.basename(file.originalname, path.extname(file.originalname)) + '-' + Date.now() + path.extname(file.originalname))
   }
})

var load = multer({storage:storage})
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/disk', load.single('disk'), function(req, res) {

  res.send('disk upload is success!')
})

module.exports = router;
