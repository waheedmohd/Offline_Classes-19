const express = require('express'); // load the express module
const app = express(); // initialize express app
const path  = require('path');

const hostname = '127.0.0.1';
const port = 3000;

// Use Static files middleware
app.use('/public', express.static('public'));

// for html tag
app.get('/',(request,response) => {
    response.send(`<h2 style="color: blueviolet">Welcome to Express JS</h2>`);
});

// for html page
app.get('/home',(request,response) => {
    response.sendFile(path.join(__dirname, 'index.html'));
});

// for json response
let persons = [
    {id:1,first_name:"Artair",last_name:"Sackes",email:"asackes0@amazon.de",gender:"Male",ip_address:"199.147.189.59"},
    {id:2,first_name:"Hortensia",last_name:"Linford",email:"hlinford1@dmoz.org",gender:"Female",ip_address:"187.84.112.152"},
    {id:3,first_name:"Sasha",last_name:"Lewer",email:"slewer2@ucla.edu",gender:"Female",ip_address:"233.52.153.184"},
    {id:4,first_name:"Francklyn",last_name:"McAlpin",email:"fmcalpin3@drupal.org",gender:"Male",ip_address:"123.144.181.58"},
    {id:5,first_name:"Cordell",last_name:"Orring",email:"corring4@etsy.com",gender:"Male",ip_address:"62.56.30.248"}
];
app.get('/json',(request,response) => {
    response.json(persons);
});

//download a file
app.get('/download',(request,response) => {
    response.download(path.join(__dirname , 'ui.pdf'));
});


app.listen(port,hostname, () => {
    console.log(`Server is Started at http://${hostname}:${port}`);
});