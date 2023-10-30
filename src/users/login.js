import { Router } from 'express'; // Certifique-se de importar o Express, se ainda não estiver importado.
const router = Router(); // Crie uma instância de roteador Express.

import { loginCheck } from '../../../modules/user/user.service'

router.post('/api/users/login', async (req, res) => {
  try{
    const user = await loginCheck(req.body) 
    
    res.send(user)
  } catch (err){
   return res.status(400).send(err.message)
  }
});

export default router; // Exporte o roteador para ser usado em seu aplicativo Express.

