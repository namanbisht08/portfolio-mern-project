const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const contact = new Schema({
clientName: {
    type: 'string',
    required: true
},
email: {
  type: 'string',
  required: true
},
projectDetails: {
  type: 'string',
  required: true
},

projectTopic: {
  type: 'string',
  required: true
},
});

module.exports = mongoose.model("contact", contact);
