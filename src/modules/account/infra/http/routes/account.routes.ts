import { Router } from 'express';
import CreateCarController from '../../../useCases/createAccount/CreateAccountController';
import GetAccountByIdController from '../../../useCases/getAccountById/GetAccountByIdController';

const accountsRouter = Router();

const createAccount = new CreateCarController();
const getAccountById = new GetAccountByIdController();

accountsRouter.post('/', createAccount.handle);
accountsRouter.get('/:id', getAccountById.handle);

export default accountsRouter;
