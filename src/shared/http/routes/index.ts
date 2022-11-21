import { Router } from 'express';
import accountsRouter from '../../../modules/account/infra/http/routes/account.routes';
import authRouter from '../../../modules/auth/infra/http/routes/auth.routes';
import transactionsRouter from '../../../modules/transactions/infra/http/routes/transaction.routes';
import usersRouter from '../../../modules/users/infra/http/routes/users.routes';

const routes = Router();

routes.get('/', (req, res) => { res.json({ health: 'OK' }) });

routes.use('/users', usersRouter);
routes.use('/accounts', accountsRouter);
routes.use('/transactions', transactionsRouter);
routes.use('/sessions', authRouter);

export default routes;
