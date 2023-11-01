import Pedido from "../models/Pedido";
import User from "../models/User"

class PedidoController {
  async store(req, res) {
    const {_id} = req.params;

    try {
      // Obter os produtos no carrinho com seus preços
      const user = await User.findById({ _id });
      const {cartItems, productQuantities} = req.body;
      console.log("ITEMS", cartItems)
      console.log("QUANTITY",productQuantities)
      
      const products = cartItems.map((item) => ({
        id_product: item.id, // Mapeia o id do item para id_product
        quantity: productQuantities[item.id], // Mapeia a quantidade do item para quantity
      }));
      console.log("Products", products);
      
      const pedido = new Pedido({
        name_user: user.name,
        deliveryAddress:user.address,
        items: products
      });

      await pedido.save();


      res.status(201).json({ message: 'Compra criada com sucesso', pedido });
    } catch (error) {
      console.error('Erro ao criar a compra:', error);
      res.status(500).json({ error: 'Erro ao criar a compra' });
    }
  }
}

export default new PedidoController();
