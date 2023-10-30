import { Schema, model } from "mongoose"
  const UserSchema = new Schema({
    name: { type: String},
    email: {type: String},
    address: {type: String},
    password: {type: String}
  })

module.exports = model('User', UserSchema);