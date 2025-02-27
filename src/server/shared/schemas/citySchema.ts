import * as yup from 'yup';

import { ICity } from '../interfaces/cityInterface';

export const citySchema: yup.Schema<ICity> = yup.object().shape({
  name: yup.string().required().min(3).max(140),
  state: yup.string().required().min(3).max(140)
});