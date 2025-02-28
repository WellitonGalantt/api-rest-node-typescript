import { Request, Response } from 'express';
import { StatusCodes } from "http-status-codes";

import { ICity } from '../shared/interfaces/cityInterface';
import { citySchema, querySchema } from '../shared/schemas/citySchema';
import { validation } from '../shared/middlewares';

export class CityController {

  static bodyValidation = validation('body', citySchema);
  static queryValidation = validation('query', querySchema);

  static async createCity(req: Request<{}, {}, ICity>, res: Response) {

    return res.status(StatusCodes.CREATED).json({ message: 'Cidade criada com sucesso!' });
  }

}