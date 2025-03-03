import { Request, Response } from 'express';
import { StatusCodes } from "http-status-codes";

import { ICity, IQuery, IParam } from '../shared/interfaces/cityInterface';
import { citySchema, querySchema, paramSchema } from '../shared/schemas/citySchema';
import { validation } from '../shared/middlewares';

export class CityController {

  static createValidation = validation({ 'body': citySchema });
  static queryValidation = validation({ 'query': querySchema });
  static paramValidation = validation({ 'params': paramSchema });
  static updateValidation = validation({ 'params': paramSchema, 'body': citySchema });


  static async deleteById(req: Request<IParam>, res: Response) {
    if (!req.params.id) {
      return res.status(StatusCodes.BAD_REQUEST).json({ message: 'O parâmetro id é obrigatório!' });

    } else if (Number(req.params.id) === 9999) { // Teste ipotético para teste de id invalido

      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: { default: 'REgistro nao encontrado(deleteById)' } });
    }

    return res.status(StatusCodes.NO_CONTENT).send();
  }


  static async updateById(req: Request<IParam, {}, ICity>, res: Response) {
    if (!req.params.id) {
      return res.status(StatusCodes.BAD_REQUEST).json({ message: 'O parâmetro id é obrigatório!' });
    }

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: 'Não implementado(updateById)' });
  }


  static async getById(req: Request<IParam>, res: Response) {
    if (!req.params.id) {
      return res.status(StatusCodes.BAD_REQUEST).json({ message: 'O parâmetro id é obrigatório!' });
    }

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: 'Não implementado(getById)' });
  }


  static async getAll(req: Request<{}, {}, {}, IQuery>, res: Response) {
    console.log(req.query);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: 'Não implementado(getAll)' });
  }

  static async createCity(req: Request<{}, {}, ICity>, res: Response) {

    return res.status(StatusCodes.CREATED).json(1);
  }

}