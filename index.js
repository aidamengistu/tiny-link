var express = require('express');
var bodyParser = require('body-parser');
var Hashids = require("hashids"),
hashids = new Hashids("this is my salt");

var db = require('./models');
var app = express();


app.set("view engine", "ejs");

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended:false}))

app.get('/', function(req,res){
  res.render('index');
});

app.post('/links', function(req,res){
  db.url.findOrCreate({where: {longURL: req.body.link}}).spread(function(data, created) {
    var id = hashids.encode(data.id);
    data.shortURL = id;
    data.save();
    res.render('show', {longURL: data.longURL, hash:id});
  // console.log("The url is " + url);
})

});

app.get('/links/:id'), function(req,res){
  res.render('show');
}

app.get(':/hash'), function(req,res){
  res.redirect(longURL);
}

app.listen(process.env.PORT || 3000, function(){
  console.log('listening on 3000!!')
});