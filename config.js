const MongoClient = require('mongodb').MongoClient;
const MONGO_URL = 'mongodb://surajit001:mom12345@ds263380.mlab.com:63380/plentyofcats'
var exports = module.exports = {};


exports.connecttodb = function() {



    return new Promise(function(resolve, reject) {
        // Do async job
        MongoClient.connect(MONGO_URL, function (err, db) {
            console.log("Connected to db successfully");


            if (err) {

                reject(err);

            }

            else {
                resolve(db)


            }
        })


    })







    }
