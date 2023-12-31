import Product from '../models/Product';

class ProductController {

  async populate(req, res) {
    
    const equipments = await Product.create(req.body)
    console.log(req.body)
    return res.json(equipments)
  }
  async getAllProducts(req, res) {
    
    try {       
      const products = await Product.find();
      console.log(products)
      return res.json({ products });
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao buscar o produto', message: error.message });
    }
  }

  async getProduct(req, res) {
    try {
      const { _id } = req.params;  
      const product = await Product.find({_id});
      return res.json({ product });
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao buscar o produto', message: error.message });
    }
  }
}

export default new ProductController();
