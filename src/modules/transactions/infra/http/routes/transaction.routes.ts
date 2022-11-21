import { Router } from 'express';
import { ensureAuthenticated } from '../../../../auth/middlewares/ensureAuthenticated';
import CreateTransactionController from '../../../useCases/createTransaction/CreateTransactionController';

const transactionsRouter = Router();
transactionsRouter.use(ensureAuthenticated);

const createTransactionController = new CreateTransactionController();

transactionsRouter.post('/', createTransactionController.handle);

export default transactionsRouter;
