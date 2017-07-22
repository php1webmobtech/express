/**
 * Created by shraddha on 19/7/17.
 */
// importing modules
const express = require("express");

var fs = require('fs');

// app is a instance of express
// to run express on top of nodejs need to run app instance
const app = express();

// basic http get request on '/'
app.get('/', function(req, res) {
    fs.readFile('demofile1.html', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
    });
});

// server port listen on 3000
app.listen(3000, function() {
    console.log('Server is running on port 3000');
});