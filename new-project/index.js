/**
 * Created by shraddha on 20/7/17.
 */
// importing modules
const express = require("express");
const path = require('path');
var bodyParser = require('body-parser');

// app is a instance of express
// to run express on top of nodejs need to run app instance
const app = express();


// set the view engine to ejs
app.set('view engine', 'ejs');

// create application/json parser
//var jsonParser = bodyParser.json();
// parse application/json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//var urlencodedParser = bodyParser.urlencoded({ extended: false })

// to use middleware app.use
// express built-in middleware for static dir files to server
// from assets we serve app.css
app.use(express.static('assets'));

// for mutiple static dir
// from file we serve index.html
app.use(express.static('files'));

// to create path prefix virtual dir
// from virtual we serve images
app.use('/virtual', express.static(path.join(__dirname, 'images')));


// basic http get request on '/'
app.get('/', function(req, res) {
    //res.sendFile("Hello World!");
    res.sendFile(path.join(__dirname, 'files/index.html'));
});

app.get('/about', function(req, res) {
    //res.sendFile("Hello World!");
    res.sendFile(path.join(__dirname, 'files/about.html'));
});

app.get('/contact', function(req, res) {
    //res.sendFile("Hello World!");
    res.sendFile(path.join(__dirname, 'files/contact.html'));
});

app.post('/action', function(req, res) {
   // if (!req.body) return res.sendStatus(400);
    //res.send('welcome, ' + res.body.username);
    //res.end('post request');
   /* res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("name-"+req.body.name+"<br/>");
    res.write("subject-"+req.body.subject+"<br/>");
    res.write("message-"+req.body.message+"<br/>");
    res.end();*/
    res.render('contact', {
        name: req.body.name,
        subject: req.body.subject,
        message:req.body.message
    });
    //res.sendFile("Hello World!");
    //res.sendFile(path.join(__dirname, 'files/contact.html'));
});


// will match eg: hat, cat, rat
app.get(/.*at$/, function (req, res) {
    res.send("Pattrn : /.*at/");
});

// will match
// http://localhost:3000/users/kamerk22/age/21
// req will provide all get request params
app.get('/users/:username/age/:age', function (req, res) {
    res.send(req.params);
});


// server port listen on 3000
app.listen(3000, function() {
    console.log('Server is running on port 3000');
});
