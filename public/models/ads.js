

var config = require("./config.js");

const MongoClient = require('mongodb').MongoClient;
const MONGO_URL = 'mongodb://surajit001:mom12345@ds145868.mlab.com:45868/employee'

var connectstats = config.connecttodb();

console.log('conn',connectstats);


var Userad = MongoClient.model("Userad", {
    title: String,
    descrption: String,
    email:String,
    category:String
});





