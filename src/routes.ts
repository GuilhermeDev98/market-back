import { Router } from 'express';
import { UserController } from './controllers/UserController';
import { ProductController } from './controllers/ProductController';


const router = Router();

router.post('/users', UserController.create);
router.post('/users/login', UserController.login);

router.get('/products', ProductController.createProduct);
router.post('/products', UserController.create);
router.post('/products', UserController.create);
router.post('/products', UserController.create);
router.post('/products', UserController.create);
router.post('/products', UserController.create);
router.post('/products', UserController.create);


export { router };
