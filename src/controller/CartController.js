import Cart from "../models/Cart";

class CartController {
  
  async store(req, res) {
    const itemsToAdd = req.body; // Vetor de objetos JSON

    try {
      const cartItems = await Cart.create(itemsToAdd); // Crie novos documentos do modelo Cart

      console.log('Itens adicionados ao carrinho:', cartItems);

      return res.status(200).json(cartItems);
    } catch (error) {
      if (error.code === 11000) {
        return res.status(400).json({ error: 'Produto já existe no carrinho', message: error.message });
      }

      return res.status(500).json({ error: 'Erro ao adicionar produto(s) ao carrinho', message: error.message });
    }
  }
  

  async getCart(req, res) {
    const { id_user } = req.params;
    try {
      const cart = await Cart.findOne({ id_user });
  
      if (!cart) {
        return res.json({ cartItems: [] }); // Retorna um carrinho vazio se não houver carrinho para o usuário.
      }
  
      return res.json({ cartItems: cart.items });
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao obter o carrinho', message: error.message });
    }
  }
  

  async updateQuantity(req, res) {
    const { id_user, id_product } = req.params;
    const { quantity } = req.body;
    console.log({ id_user, id_product, quantity })
    try {
      const cartItem = await Cart.findOne({ id_user, id_product });
      console.log(cartItem)
      if (!cartItem) {
        return res.status(404).json({ error: 'Produto não encontrado no carrinho' });
      }

      // Atualize a quantidade do produto no carrinho
      cartItem.quantity = quantity;
      await cartItem.save();

      return res.json({ message: 'Quantidade do produto atualizada com sucesso', cartItem });
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao atualizar a quantidade do produto no carrinho', message: error.message });
    }
  }

  async delete(req, res) {
    const { id_user, id_product } = req.params;
    try {
      const cartItem = await Cart.findOneAndDelete({ id_user, id_product });

      if (!cartItem) {
        return res.status(404).json({ error: 'Produto não encontrado no carrinho' });
      }

      return res.json({ message: 'Produto removido do carrinho com sucesso', cartItem });
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao excluir produto do carrinho', message: error.message });
    }
  }
}

export default new CartController();
