// Arquivo de definicao de tipagem
import { ICidade } from "../../models"

// Declarando as estruturas das tabelas
declare module "knex/types/tables" {
  interface Tables {
    cidade: ICidade
    //pessoa: IPessoa
    //usuario: IUsuario
  }
}