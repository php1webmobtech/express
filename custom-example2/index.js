/**
 * Created by shraddha on 19/7/17.
 */
// importing modules
const express = require("express");

// app is a instance of express
// to run express on top of nodejs need to run app instance
const app = express();

// basic http request start //
app.get('/get', function(req, res) {
    res.send("This is a get Request");
});

app.post('/post', function(req, res) {
    console.log(req.body);
     res.send("Post Method");
    //res.send(req.body.profileDetail);
});

// basic http request end //

// server port listen on 3000
app.listen(3000, function() {
    console.log('Server is running on port 3000');
});