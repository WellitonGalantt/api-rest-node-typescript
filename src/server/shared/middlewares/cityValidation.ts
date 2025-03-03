import * as yup from 'yup';

import { RequestHandler } from "express";
import { StatusCodes } from 'http-status-codes';

type TProperty = 'body' | 'params' | 'query' | 'headers';
type TAllSchemas = Record<TProperty, yup.Schema<any>>;

type IValidation = (schema: Partial<TAllSchemas>) => RequestHandler;


//Funcao que retorna uma função que valida o body da requisição de acordo com tipo de validacao que queremos
export const validation: IValidation = (schemas) => async (req, res, next) => {

  let errorsResult: Record<string, Record<string, string>> = {};

  //rerotorna um array de array com os valores das chaves e valores separados
  Object.entries(schemas).forEach(([key, schema]) => {
    try {
      schema.validateSync(req[key as TProperty], { abortEarly: false }); //AbortEarly: false -> retorna todos os erros de uma vez ao invés de apenas o primeiro
    }
    catch (error) {
      const yupError = error as yup.ValidationError;
      const errors: Record<string, string> = {};

      yupError.inner.forEach((error) => {

        if (!error.path) return;
        errors[error.path] = error.message;

      });

      errorsResult[key] = errors;
    }
  });

  if (Object.entries(errorsResult).length === 0) {
    return next();
  } else {
    res.status(StatusCodes.BAD_REQUEST).json({ errors: errorsResult });
  }
}


// export const createBodyValidation = async (req: Request, res: Response, next: NextFunction) => {

//   let validateData: ICity | undefined;

//   try {
//     validateData = await citySchema.validate(req.body, { abortEarly: false }); //AbortEarly: false -> retorna todos os erros de uma vez ao invés de apenas o primeiro
//   }
//   catch (error) {
//     const yupError = error as yup.ValidationError;
//     const validationErrors: Record<string, string> = {};

//     yupError.inner.forEach((error) => {

//       if (!error.path) return;
//       validationErrors[error.path] = error.message;
//     })

//     return res.status(StatusCodes.BAD_REQUEST).json({ errors: validationErrors, });
//   }
// }