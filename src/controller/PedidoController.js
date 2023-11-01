import Pedido from "../models/Pedido";
import User from "../models/User"

class PedidoController {
  async store(req, res) {
    const {_id} = req.params;

    try {

      const user = await User.findById({ _id });
      const {cartItems, productQuantities} = req.body;
      const products = cartItems.map((item) => ({
        id_product: item.id, 
        quantity: productQuantities[item.id], 
      }));

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
