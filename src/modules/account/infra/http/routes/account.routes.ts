import { Router } from 'express';
import CreateAccountController from '../../../useCases/createAccount/CreateAccountController';
import GetAccountByIdController from '../../../useCases/getAccountById/GetAccountByIdController';

const accountsRouter = Router();

const createAccount = new CreateAccountController();
const getAccountById = new GetAccountByIdController();

accountsRouter.post('/', createAccount.handle);
accountsRouter.get('/:id', getAccountById.handle);

export default accountsRouter;
