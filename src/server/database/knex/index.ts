import { knex } from 'knex';
import { development, test, production } from './Envirroment';

// Um simples swirch para retornar a configuracao de acordo com o ambiente
const getEnviroment = () => {
  switch (process.env.NODE_ENV) {
    case 'test': return test;
    case 'production': return production;
    default: return development;
  }
}

// Exportando a conexao com o banco de dados
export const Knex = knex(getEnviroment());
