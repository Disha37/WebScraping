// JavaScript Document
var mysql=require('mysql');                    //creating mysql instance
var fs=require('fs');
var connection = mysql.createConnection(
    {
      host     : 'localhost',
      user     : 'your username',
      password : 'your mysql password',
      database: 'user_details'
    }
);
var readData,query1,length,query2;
var id=1;
var store=[];
query1='select count(*) as count from login';
query2='update login set location=? where id=?';
fs.readFile('D:\ begin2.txt',function(err,data)   //reading file that has scraped information
{
 if (err) throw err; 
 else 
 {
   readData=data.toString();
   store=readData.split(',');
   update();
 }
});
function update()
{
connection.connect();
connection.query(query1,function(err,rows)   //finding the total number of users 
{
	length=rows[0].count;
});
for(var i=0;i<length;i++)
{
 connection.query(query2,[store[i],id]);	//updating databases
 id++;
}
connection.query('select * from login',function(err,rows)
{
 if (err) throw err;
 else
	 for(var i=0;i<length ;i++)             //displaying details of the database 
	 	 console.log(rows[i].username ,rows[i].password,rows[i].location);
});
connection.end();
}
 
