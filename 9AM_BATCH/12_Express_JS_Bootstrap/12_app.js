const express = require('express');
const app = express();
const path = require('path');

const hostname = '127.0.0.1';
const port = 3000;

// Use static files middleware
app.use('/public',express.static('public'));

// home page
app.get('/',(request,response) => {
    response.sendFile(path.join(__dirname,'views','index.html'));
});

// About page
app.get('/about',(request,response) => {
    response.sendFile(path.join(__dirname,'views','about.html'));
});

// profile page
app.get('/profile',(request,response) => {
    response.sendFile(path.join(__dirname,'views','profile.html'));
});

// Services page
app.get('/services',(request,response) => {
    response.sendFile(path.join(__dirname,'views','services.html'));
});

// contact page
app.get('/contact',(request,response) => {
    response.sendFile(path.join(__dirname,'views','contact.html'));
});

app.listen(port,hostname, () => {
    console.log(`Server is Started at http://${hostname}:${port}`);
});
