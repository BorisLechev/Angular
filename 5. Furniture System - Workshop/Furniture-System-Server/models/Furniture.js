const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const furnitureSchema = new Schema({
  make: {
    type: Schema.Types.String,
    required: true
  },
  model: {
    type: Schema.Types.String,
    required: true
  },
  year: {
    type: Schema.Types.Number,
    required: true
  },
  description: {
    type: Schema.Types.String,
    required: true
  },
  price: {
    type: Schema.Types.Number,
    required: true
  },
  imageUrl: {
    type: Schema.Types.String,
    required: true
  },
  material: {
    type: Schema.Types.String
  },
  creator: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
});

const Furniture = mongoose.model('Furniture', furnitureSchema);

module.exports = Furniture;