import { Router } from 'express';
import ExampleController from '../controllers/ExampleController';

const exampleRouter = Router();
const exampleController = new ExampleController();

exampleRouter.get('/', exampleController.example);

export default exampleRouter;
