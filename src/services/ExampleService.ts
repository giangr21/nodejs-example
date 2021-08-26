import { sign } from 'jsonwebtoken';
import authConfig from '../config/auth';
import AppError from '../errors/AppError';
import Example from '../models/Example';

interface IResponse {
  user: any;
  token: string;
}

class AutenticarUsuarioService {
  public async execute(): Promise<IResponse> {
      return {
        user: '',
        token: '',
      };
    }
}

export default AutenticarUsuarioService;
