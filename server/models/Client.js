const mongoose = require('mongoose');

// create mongoose schema
// db ->  obj data mapper layer (mongooseLayer) -> create a schema, inc fields for db collections -> graphQL API (has graphQL schema)

const ClientSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
});

module.exports = mongoose.model('Client', ClientSchema);