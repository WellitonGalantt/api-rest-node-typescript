//Arquivo para crição da tabela cidade


// Comando para criacao de migracao automatica com o knex
// npx knex --knexfile ./src/server/database/knex/Envirroment.ts migrate:make teste

// Os arquivos de migracao sao executador em ordem crescente
import type { Knex } from "knex";
import { ETablesNames } from "../ETablesNames";


export async function up(knex: Knex) {
  // Criando a tabela cidade a partir de um schema
  return knex.schema.createTable(ETablesNames.cidade, (table) => {
     // Coluna id que sera autoincrementada, sera uma chame primaria e sera um indice
    table.bigIncrements("id").primary().index();
    table.string('nome', 120).index().notNullable();

    table.comment("Tabela de cidades");
  })
  .then(()=>{
    console.log(`# Created table ${ETablesNames.cidade}`);
  })
}


export async function down(knex: Knex) {
  return knex.schema.dropTable(ETablesNames.cidade)
  .then(()=>{
    console.log(`# Droped table ${ETablesNames.cidade}`);
  })
}

