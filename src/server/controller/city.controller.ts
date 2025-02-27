import { Request, Response } from 'express';
import { StatusCodes } from "http-status-codes";

import { ICity } from '../shared/interfaces/cityInterface';
import { citySchema } from '../shared/schemas/citySchema';
import * as yup from 'yup';

export class CityController {

  static async createCity(req: Request<{}, {}, ICity>, res: Response) {

    console.log(req.body);
    return res.status(StatusCodes.CREATED).json({ message: 'Cidade criada com sucesso!' });
  }

}