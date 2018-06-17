var express = require('express');
var router = express.Router();
var cloudinary = require('cloudinary');
var multer  = require('multer');
var fs = require('fs');


var upload = multer({ dest: './public/images/'});

var adcontroller = require('/home/surajit/WebstormProjects/PlentyFish/public/controllers/postadd.js')

cloudinary.config({
    cloud_name: 'mobiotrics',
    api_key: '841164352818738',
    api_secret: 'tlEgZOo2TiK34J-kQ9BBqwUM4mg'
});
/* GET home page. */
router.get('/', function(req, res, next) {

  adcontroller.getdatafromapp().then(function(result){
     console.log('result',result)




      res.render('index', { title: 'Express' });


  });

});


router.post('/', upload.array('filesToUpload', 12),function(req, res) {

    console.log('files', req.files);

    var nofofiles= req.files;
    var urls=[];

    console.log('Body- ' + JSON.stringify(req.body));
    var email = req.body.email;
    var message = req.body.message;
    var category = req.body.category;
    var datetime = new Date();


    for(var i =0;i<nofofiles.length;i++){
        var filename = nofofiles[i].filename;
        var dest = nofofiles[i].destination;

        var correctpath = dest+filename;
        cloudinary.uploader.upload(correctpath, function(result) {
            console.log(result.secure_url);
            urls.push(result.secure_url)

            fs.unlink(correctpath, function(error) {
                if (error) {
                    throw error;
                }
                console.log('Deleted file');
            });



        });
    }



    console.log(email,message,category);



});

module.exports = router;
