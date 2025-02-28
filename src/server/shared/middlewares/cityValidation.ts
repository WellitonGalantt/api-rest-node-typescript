import * as yup from 'yup';

import { RequestHandler } from "express";
import { StatusCodes } from 'http-status-codes';

// Field é de onde ira vim os dados que serao validados
// Schema é o schema de validação
type IValidation = (field: 'body' | 'params' | 'query' | 'headers', schema: yup.Schema<any>) => RequestHandler;


//Funcao que retorna uma função que valida o body da requisição de acordo com tipo de validacao que queremos
export const validation: IValidation = (field, schema) => async (req, res, next) => {
  try {
    await schema.validate(req[field], { abortEarly: false }); //AbortEarly: false -> retorna todos os erros de uma vez ao invés de apenas o primeiro
    return next();
  }
  catch (error) {
    const yupError = error as yup.ValidationError;
    const validationErrors: Record<string, string> = {};

    yupError.inner.forEach((error) => {

      if (!error.path) return;
      validationErrors[error.path] = error.message;

    });


    res.status(StatusCodes.BAD_REQUEST).json({ errors: validationErrors });
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