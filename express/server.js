'use strict'
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var Serviceformrequest = require('./model/ServiceFormRequest');
var cors =require('cors');
var urlEncodedParser =bodyParser.urlencoded({extended: false});
var app = express();
var router = express.Router();

var port = process.env.API_PORT || 3001;

var mongoDB ='mongodb+srv://chitra:Password@cluster0.1zcke.mongodb.net/test'
mongoose.connect(mongoDB)
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(
    cors({
        origin :'http://localhost:3000'
    })
)

app.get('/', function(req, res) {
    res.json({ message: 'API Initialized!'});
  });

app.post('/ServiceFormResponse',urlEncodedParser,
  function(req, res) {    
    var serviceformrequest = new Serviceformrequest();
    (req.body.fname) ? serviceformrequest.fname = req.body.fname : null;
    (req.body.lname) ? serviceformrequest.lname = req.body.lname : null;
    (req.body.orgname) ? serviceformrequest.orgname = req.body.orgname : null;
    (req.body.email) ? serviceformrequest.email = req.body.email : null;
    (req.body.phone) ? serviceformrequest.phone = req.body.phone : null;
    (req.body.required) ? serviceformrequest.required = req.body.required : null;
    (req.body.startDate) ? serviceformrequest.startDate = req.body.startDate : null;
    (req.body.completionDate) ? serviceformrequest.completionDate = req.body.completionDate : null;
    (req.body.requestDate) ? serviceformrequest.requestDate = req.body.requestDate : null;
    (req.body.country) ? serviceformrequest.country = req.body.country : null;
    (req.body.region) ? serviceformrequest.region = req.body.region : null;
    (req.body.addlInfo) ? serviceformrequest.addlInfo = req.body.addlInfo : null;

    serviceformrequest.save(function(err) {
      if (err)  res.send(err);
          
    res.json(req.body);      
  })
})

app.use('/api', router);
app.listen(port, function() {
  console.log(`api running on port ${port}`);
});