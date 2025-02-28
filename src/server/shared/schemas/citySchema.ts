import * as yup from 'yup';

import { ICity, IQuery } from '../interfaces/cityInterface';

export const citySchema: yup.Schema<ICity> = yup.object().shape({
  name: yup.string().required().min(3).max(140),
  state: yup.string().required().min(3).max(140)
});

export const querySchema: yup.Schema<IQuery> = yup.object().shape({
  id: yup.number().required().positive().integer()
});