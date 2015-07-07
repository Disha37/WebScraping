// JavaScript Document
var casper=require('casper').create(
{
	pageSettings: {
        loadImages:  true,        // The WebPage instance used by Casper will
        loadPlugins: true         // use these settings
                  },
verbose : true,
logLevel:'debug',
});

var fs=require('fs');                                                           //instance of file module
var utils=require('utils');
var data =fs.read('D:\ begin.txt');                                             //the file with login details is read 
fs.write('D:\ begin2.txt','','w');                                             //the file to be written is cleared
casper.echo(data);
var result,details,d,a=[];
var c=0;
var x=0;
var scr=[];
var city;
var count=0;
details=data.split("\r\n");
for (var i=0;i<details.length;i++)                                        // extracting the username and password
{
    d=details[i].split(" ");
	a[c++]=d[0];
	a[c++]=d[1];
	
}
casper.echo(a);
casper.start('file:///location of /scrape.html',function()      //opening the login page 
{
	console.log('Page loaded');
});
casper.then(function()
{
	for(var i =0;i<c/2-1;i++)
	{
    casper.then(function()
	{
	this.sendKeys('#name',a[x++]);
	this.sendKeys('#pass',a[x++]);
	});
	casper.thenClick('#loginsubmit');
    casper.then(function()
	  {                                                  //Extracting text from the page
    city=casper.fetchText('#location');
    casper.echo(city);
    casper.thenOpen('file:///location of/scrape.html',function() //reopening the login page
      { 
        scr[count++]=city                                                      //storing the information extracted
	    console.log('Page loaded');
      });
      });
	}

});

casper.then(function()
{
	casper.echo(scr);
	fs.write('D:\ begin2.txt',scr,'w');                                  //writing the scraped info onto the file
});
casper.run();
