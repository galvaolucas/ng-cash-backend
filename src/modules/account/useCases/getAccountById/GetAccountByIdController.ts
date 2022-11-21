import { Request, Response } from 'express';
import { container } from 'tsyringe';
import GetAccountByIdUseCase from './GetAccountByIdUseCase';

export default class GetAccountByIdController {
  async handle(request: Request, response: Response): Promise<Response> {

    const { id } = request.params;

    const getAccountByIdUseCase = container.resolve(GetAccountByIdUseCase);

    const account = await getAccountByIdUseCase.execute({ id });

    return response.json(account);
  }
}
