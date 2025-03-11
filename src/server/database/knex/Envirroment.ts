import { Knex } from "knex";
import path from "path";

// migrate:latest roda todas as migrações ainda não aplicadas.
// knex:rollback Desfaz a última migração aplicada no banco de dados.
// knex:rollbackall Desfaz todas as migrações, retornando o banco de dados ao estado inicial.
// knex:seed Popula o banco de dados com dados iniciais, usando os arquivos de seed configurados no projeto.

/*
knex:migrate	Aplica novas migrações pendentes
knex:rollback 	Desfaz a última migração
knex:rollbackall	 Desfaz todas as migrações
knex:seed	 Insere dados iniciais no banco
*/

// Cada um desses é uma configuracao para um banco de dados
// Vamos trabalhar com 3 tipos para nosso projeto
export const development: Knex.Config = {
  client: "sqlite3",
  useNullAsDefault: true,
  connection: {
    //Local onde sera criado o arquivo banco de dados local
    filename: path.resolve(__dirname, "..", "..", "..", "..", "database.sqlite"),
  },

  migrations: {
    directory: path.resolve(__dirname, "..", "migrations"),
  },

  seeds: {
    directory: path.resolve(__dirname, "..", "seeds"),
  },
  //Configuraca para dados realizados no banco de dados
  pool: {
    afterCreate: (connection: any, done: Function) => {
      //Ativando as chaves estrangeiras
      connection.run("PRAGMA foreign_keys = ON");
      done();
    }
  }

};

export const test: Knex.Config = {
  ...development,
  connection: ":memory:",
};

export const production: Knex.Config = {
  ...development,
};