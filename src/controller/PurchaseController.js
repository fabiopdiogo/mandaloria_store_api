import Purchase from "../models/Purchase";
import Cart from "../models/Cart";
import Product from "../models/Product";
import User from "../models/User"

class PurchaseController {
  async store(req, res) {
    const { id_user } = req.params;
    const _id = id_user
    try {
      // Obter os produtos no carrinho com seus preços
      const user = await User.findById({ _id });
      const cartItems = await Cart.find({ id_user });
      
      
      const products = cartItems.map(item => {
        // Verifique se há um campo 'items' no objeto item
        if (item.items && Array.isArray(item.items)) {
          // Mapeie os produtos em 'items' e retorne um objeto com id_product e quantity
          return item.items.map(product => ({
            id_product: product.id_product,
            quantity: product.quantity,
          }));
        } else {
          // Se não houver 'items', retorne um array vazio
          return [];
        }
      }).flat();
      
      // A variável 'products' agora conterá todos os produtos em todos os objetos 'cartItems'
      
      
      console.log("Name",user)
      console.log("Address",user)

      const purchase = new Purchase({
        name_user: user.name,
        deliveryAddress:user.address,
        items: products
      });

      //await purchase.save();

      //await Cart.deleteMany({ id_user });

      res.status(201).json({ message: 'Compra criada com sucesso', purchase });
    } catch (error) {
      console.error('Erro ao criar a compra:', error);
      res.status(500).json({ error: 'Erro ao criar a compra' });
    }
  }
}

export default new PurchaseController();
