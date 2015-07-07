
Web scraping code using CasperJS and NodeJS

Prerequisites: NodeJs and CasperJS

Steps:

1)Login username and password is obtained from the user login table for all users and stored in a file(Begin.txt) using NodeJs.

2)Scrape Web page using casperJs for all users and store updated information in another file(Begin2.txt)

3)Update user information in the table from the file Begin2.txt using NodeJs 


There are two html pages ,two nodejs files and one casperjs files.
My html pages are static.
For this to work there should be a database (user_details) in your mysql and a table (login) should be present in user_details.Four fields(id,username,password,location) are present in the login table.
Initially the user feeds in the username and password for a few users in the mysql table and the location has to be scraped from the web page.
So,after creating the table and inserting username and password run the scripts in the following order:
fetchlogin.js
scrapepage.js
updatedatabase.js
The location is updated in your login table
The paths and mysql passwords have to be modified accordingly.
Two files :begin.txt and begin2.txt will be created in your D drive.
