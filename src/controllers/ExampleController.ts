import { Request, Response } from 'express';
import ExampleService from '../services/ExampleService';

export default class ExampleController {
  public async example(request: Request, response: Response): Promise<Response> {
    // const { email, senha } = request.body;
    const exampleService = new ExampleService();
    await exampleService.execute();
    return response.json('Hello World');
  }
}
