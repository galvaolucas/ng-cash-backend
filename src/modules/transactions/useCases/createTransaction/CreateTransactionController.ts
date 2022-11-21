import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateTransactionUseCase from './CreateTransactionUseCase';

export default class CreateTransactionController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {
      debitedAccountId,
      creditedAccountId,
      value,
    } = request.body;

    const createTransactionUseCase = container.resolve(CreateTransactionUseCase);

    const transaction = await createTransactionUseCase.execute({
      debitedAccountId,
      creditedAccountId,
      value,
    });

    return response.json(transaction)
  }
}
