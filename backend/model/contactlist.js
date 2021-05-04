const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// Define Schema
let userSchema2 = new Schema({
   
    name: {
      type: String
    },
    contact: {
        type: String
      },
  }, 
  {
      collection: 'contacts'
    })
  
  module.exports = mongoose.model('contacts', userSchema2)