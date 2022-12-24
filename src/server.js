// Initialization
const express = require('express'); // instancing express
const app = express(); // creates a server

const mongoose = require('mongoose');

const Note = require('./models/Note');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
// extended: true -> Nested Objests is correct
// extended: false -> Nested Object is wrong
app.use(bodyParser.json());


// we are first connecting to the mongodb database and then running the req
mongoose.connect('mongodb+srv://krishanwalia:krishanwalia@cluster0.c073ygb.mongodb.net/?retryWrites=true&w=majority').then(function () {
    // App Routes-----------------------------
    // Home Route ( / ) 
    app.get('/', function (req, res) {
        response = { message: 'API is working ' };
        res.json(response);
    });
    const noteRouter = require('./routes/Note');
    app.use('/notes', noteRouter);

});




const PORT = process.env.PORT || 5000;
// Starting the server on a port
app.listen(PORT, function () {
    console.log('server started at port: ' + PORT);
});

