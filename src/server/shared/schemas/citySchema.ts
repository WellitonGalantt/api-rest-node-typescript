import * as yup from 'yup';

import { ICity, IQuery, IParam } from '../interfaces/cityInterface';

export const citySchema: yup.Schema<ICity> = yup.object().shape({
  name: yup.string().required().min(3).max(140)
});

export const querySchema: yup.Schema<IQuery> = yup.object().shape({
  page: yup.number().optional().moreThan(0),
  limit: yup.number().optional().moreThan(0),
  filter: yup.string().optional(),
});

export const paramSchema: yup.Schema<IParam> = yup.object().shape({
  id: yup.number().integer().optional().moreThan(0),
});