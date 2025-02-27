import * as yup from 'yup';

import { NextFunction, Request, Response } from "express";
import { ICity } from "../interfaces/cityInterface";
import { citySchema } from "../schemas/citySchema";
import { StatusCodes } from 'http-status-codes';


export const createBodyValidation = async (req: Request, res: Response, next: NextFunction) => {

  let validateData: ICity | undefined;

  try {
    validateData = await citySchema.validate(req.body, { abortEarly: false }); //AbortEarly: false -> retorna todos os erros de uma vez ao invés de apenas o primeiro
  }
  catch (error) {
    const yupError = error as yup.ValidationError;
    const validationErrors: Record<string, string> = {};

    yupError.inner.forEach((error) => {

      if (!error.path) return;
      validationErrors[error.path] = error.message;
    })

    return res.status(StatusCodes.BAD_REQUEST).json({ errors: validationErrors, });
  }
}