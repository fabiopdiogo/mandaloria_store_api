import { Schema, model } from "mongoose"
  const PedidoSchema = new Schema({
    name_user: { type: String, required: true },
    deliveryAddress: { type: String},
    items: [
      {
        id_product: { type: String, required: true }, // ID do produto
        quantity: { type: Number, required: true }, // Quantidade do produto
        _id: false
      }
    ]    
 })

module.exports = model('Pedido', PedidoSchema);