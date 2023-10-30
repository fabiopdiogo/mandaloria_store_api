import express, { Router } from 'express'
import ProductController from '../controller/ProductController';
import UserController from '../controller/UserController';
import SessionController from '../controller/SessionController';
import CartController from '../controller/CartController';
import PurchaseController from '../controller/PurchaseController';

const router = Router();

router.use(express.json());

router.post('/populate', ProductController.populate);
router.get('/equipments', ProductController.getAllProducts)

router.post('/cadastro', UserController.store);

router.post('/login', SessionController.store);

router.post('/carrinho', CartController.store);
router.post('/pedido/:id_user', PurchaseController.store);
export default router; 