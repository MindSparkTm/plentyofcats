var dbinfoo = require('/home/surajit/WebstormProjects/PlentyFish/app.js');

var express = require('express');
var app = express();
var exports = module.exports = {};

exports.getdatafromapp = function () {

    return new Promise(function (resolve,reject,err) {


          if(err){

              reject(err)
          }

          else{
              resolve(dbinfoo.senddbvariable());
          }



    })


}
