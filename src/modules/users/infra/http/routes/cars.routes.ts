import { Router } from 'express';
import CreateCarController from '../../../useCases/createCars/CreateUserController';

const usersRouter = Router();

const createCarController = new CreateCarController();

usersRouter.post('/', createCarController.handle);

export default usersRouter;
