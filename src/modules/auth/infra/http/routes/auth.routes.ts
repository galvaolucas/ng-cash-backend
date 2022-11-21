import { Router } from 'express';
import AuthUserController from '../../../useCases/createTransaction/AuthUserController';

const authRouter = Router();

const authUserController = new AuthUserController();

authRouter.post('/', authUserController.handle);

export default authRouter;
