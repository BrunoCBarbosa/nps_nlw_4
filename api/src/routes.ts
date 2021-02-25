import { Router } from 'express';
import { SurveyController } from './controllers/SurveyController';
import { UserController } from './controllers/UserController';

const router = Router();

const userController = new UserController();
const surveyController = new SurveyController();

router.get('/users', userController.findAll);
router.get('/users/:id', userController.findOne);
router.post('/users', userController.create);

router.get('/surveys', surveyController.findAll);
router.post('/surveys', surveyController.create);

export { router };