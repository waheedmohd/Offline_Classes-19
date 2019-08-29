const path = require('path');

let mapRoutes = (app) => {

    // for the home page
    app.get('/',(request,response) => {
        response.sendFile(path.join(__dirname, '..' , 'views' , 'index.html'));
    });

    // for news page
    app.get('/news',(request,response) => {
        response.sendFile(path.join(__dirname,'..' , 'views' , 'news.html'));
    });

    // for gallery page
    app.get('/gallery',(request,response) => {
        response.sendFile(path.join(__dirname,'..' , 'views' , 'gallery.html'));
    });

    // for about page
    app.get('/about',(request,response) => {
        response.sendFile(path.join(__dirname,'..' , 'views' , 'about.html'));
    });

    // for contact page
    app.get('/contact',(request,response) => {
        response.sendFile(path.join(__dirname,'..' , 'views' , 'contact.html'));
    });

    // 404 Page
    app.use((request,response) => {
        response.sendFile(path.join(__dirname,'..' , 'views' , '404.html'));
    });
};

module.exports = {
  mapRoutes
};