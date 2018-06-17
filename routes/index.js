var express = require('express');
var router = express.Router();
var adcontroller = require('/home/surajit/WebstormProjects/PlentyFish/public/controllers/postadd.js')

/* GET home page. */
router.get('/', function(req, res, next) {

  adcontroller.getdatafromapp().then(function(result){
     console.log('result',result)




      res.render('index', { title: 'Express' });


  });

});


router.post('/', function(req, res, next) {

   console.log("post data",req.body);
   var email = req.body.email;
   var message = req.body.message;
   var category = req.body.category;

   console.log(email,message,category);



});

module.exports = router;
