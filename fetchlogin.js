var mysql=require('mysql');                  //creating mySql instance
var fs=require('fs');
var connection = mysql.createConnection(     
    {
      host     : 'localhost',
      user     : 'your username',
      password : 'your mysql password',
      
    }
);
var length;
connection.connect();                       //connecting to mySql
connection.query('use user_details');
fs.truncate('D:\ begin.txt',0,function()   //truncating original file 
{
 console.log('We begin');
});
var querystring ='select username,password from login';
var query2='select count(*) as count from login';
connection.query(query2,function(err,rows)           //calculates number of users
{
 if(err) throw err;
 else 
 length=rows[0].count;
});
connection.query(querystring,function(err,rows)      //username and password of the users appended to file 
{
if(err) throw err;
for(var i=0;i< length; i++)
{
 fs.appendFile('D:\ begin.txt',rows[i].username+" "+rows[i].password+"\r\n" ,function(err)
{
if (err) throw err;
});
}
});
connection.end();                                   //connection ends

 
