המגישות:נור מוהרה +מרח סאלח
const http = require('http');
const fs = require('fs');

const home = fs.readFileSync(`${__dirname}/templates/page.html`);
const about = fs.readFileSync(`${__dirname}/templates/about.html`);
const contact = fs.readFileSync(`${__dirname}/templates/contact.html`);
const css = fs.readFileSync(`${__dirname}/css/style.css`);
const image = fs.readFileSync(`${__dirname}/images/book.jpg`);

const server = http.createServer(function (req, res) {

    const pathName = req.url;

    if (pathName === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.end(home);
    }
    else if (pathName === '/about') {
        res.setHeader('Content-Type', 'text/html');
        res.end(about);
    }
    else if (pathName === '/contact') {
        res.setHeader('Content-Type', 'text/html');
        res.end(contact);
    }
    else if (pathName === '/css/style.css') {
        res.setHeader('Content-Type', 'text/css');
        res.end(css);
    }
    else if (pathName === '/images/book.jpg') {
        res.setHeader('Content-Type', 'image/jpeg');
        res.end(image);
    }
    else {
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.end('<h1>Page not found</h1>');
    }

});

server.listen(3000);
console.log('Node.js web server at port 3000 is running..');

//מיצרים שרת בפורט 3000 , קורא קבצי CSS,HTML,(about , contact, home) ותמונות ומציג את התןכן המתאים לפי בקשת המשתמש