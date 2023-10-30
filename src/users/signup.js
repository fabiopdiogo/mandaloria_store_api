import { Router } from 'express'; // Certifique-se de importar o Express, se ainda não estiver importado.
const router = Router(); // Crie uma instância de roteador Express.

import { signupUser } from '../../../modules/user/user.service';

// Rota para criar um novo usuário
router.post('/api/users/signup', async (req, res) => {
  try {
    const user = await signupUser(req.body);
    
    res.status(201).json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router; // Exporte o roteador para ser usado em seu aplicativo Express.
