import { Router } from 'express';
import { UserController } from './controllers/UserController';

const router = Router();

const userController = new UserController();

router.get('/users', userController.findAll);
router.get('/users/:id', userController.findOne);
router.post('/users', userController.create);

export { router };