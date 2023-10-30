import { Schema, model } from "mongoose"
  const ProductSchema = new Schema({
    _id: { type: String, auto: true, startAt: 1},
    name: { type: String},
    image: {type: String},
    price: {type: Number},
    isAvailable: {type: Boolean},
    rating: {type: Number}
  })

module.exports = model('Product', ProductSchema);