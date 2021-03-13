var mysql = require('mysql');
const mysqlConfig = require('./config.js');


var connection = mysql.createConnection(mysqlConfig);


var selectAll = function(callback) {
  connection.query('SELECT * FROM tunisia', function(err, results) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};
const addComment = (params , cb) =>{
  connection.query('INSERT INTO tunisia(title,author,url,description) VALUES(?,?,?,?)' ,params, (err,events)=>{
      cb(err,events)
  })
}
const login = (params , cb) =>{
  connection.query('INSERT INTO tunisia(author,password) VALUES(?,?)' ,params, (err,events)=>{
      cb(err,events)
  })
}
const deleteComment =(myid,cb) =>{
  connection.query('DELETE FROM tunisia WHERE id = ?' , myid ,(err,events)=>{
      cb(err,events) 
  })
}
module.exports = {
  selectAll,addComment,login,deleteComment
}
