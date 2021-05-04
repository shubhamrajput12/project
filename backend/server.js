const express = require('express');
var mongoose = require('mongoose');
cors = require('cors'),
bodyParser = require('body-parser');
dbConfig = require('./db/db');
userschema2= require('./model/contactlist');

// MongoDB Setup
mongoose.connect(dbConfig.db, {
    useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true 
}).then(() => {
  console.log('Database sucessfully connected')
},
  error => {
    console.log('Database could not be connected: ' + error)
  }
)

// Setup Express.js
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cors());



// Routes to Handle Request
const user=require('./routes/router');



// API Route
app.use('/', user);

// Error
app.use((req, res, next) => {
  // Error goes via `next()` method
  setImmediate(() => {
    next(new Error('Something went wrong'));
  });
});

const port = process.env.PORT || 4002;
const server = app.listen(port, () => {
  console.log('Connected to port ' + port)
})

