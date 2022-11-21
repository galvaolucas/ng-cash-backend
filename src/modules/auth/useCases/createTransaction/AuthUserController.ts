import { Request, Response } from 'express';
import { container } from 'tsyringe';
import AuthUserUseCase from './AuthUserUseCase';

export default class AuthUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {
      username,
      password,
    } = request.body;

    const authUserUseCase = container.resolve(AuthUserUseCase);

    const user = await authUserUseCase.execute({
      username,
      password,
    });

    if (user) return response.json(user)
    else return response.status(400).json({ message: "Wasn't possible to create the transaction!"})
  }
}
