import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateAccountUseCase from './CreateAccountUseCase';

export default class CreateAccountController {
  async handle(request: Request, response: Response): Promise<Response> {

    const createAccountUseCase = container.resolve(CreateAccountUseCase);

    const account = await createAccountUseCase.execute();

    return response.json(account);
  }
}
