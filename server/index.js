var express = require('express');
var bodyParser = require('body-parser');
const db =require('../database-mysql/index.js')
var items = require('../database-mysql');


var app = express();
const PORT = 2000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/../react-client/dist'));


app.get('/tunisia', function (req, res) {
  db.selectAll(function(err, data) {
    if(err) {
      console.log(err)
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});
app.post("/tunisia/postComment", function (req, res) {
  db.addComment(
    [req.body.title,req.body.author,req.body.url,req.body.description]
    ,(err,result)=>{
    if(err){
      console.log(err)
    }else{
      res.json(result)
    }
  })
})
app.post("/tunisia/login", function (req, res) {
  db.login(
    [req.body.author,req.body.password]
    ,(err,result)=>{
    if(err){
      console.log(err)
    }else{
      res.json(result)
    }
  })
})
app.delete("/tunisia/:comment",(req,res)=>{
  db.deleteComment(req.params.comment,(err,result)=>{
    if(err){
      console.log(err)
    }else{
      res.json(result)
    }
  })
})

app.listen(2000, function() {
  console.log('listening on port 2000!');
});

