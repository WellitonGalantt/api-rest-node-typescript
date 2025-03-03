import { StatusCodes } from "http-status-codes";
import { testServer } from "../jest.setup";


//  Funcao global do jest, nao precisa importar
describe('Cidades - Delete', () => {

  it('Deletar uma cidade - Id invalido', async () => {
    const res1 = await testServer.delete('/cidades/9999').expect(StatusCodes.INTERNAL_SERVER_ERROR);

    // o que eu recebo, o que eu espero receber do teste
    expect(res1.statusCode).toEqual(StatusCodes.INTERNAL_SERVER_ERROR);
  });


  it('Deletar uma cidade - Id valido', async () => {

    // Para poder testar, primeiro criamos uma cidade e depois deletamos
    const res1 = await testServer.post('/cidades').send({"name": "Sao Paulo"}).expect(201);
    expect(res1.statusCode).toEqual(StatusCodes.CREATED);
    expect(typeof res1.body).toEqual('number');

    const res2 = await testServer.delete(`/cidades/${res1.body}`).expect(StatusCodes.NO_CONTENT);

    // o que eu recebo, o que eu espero receber do teste
    expect(res2.statusCode).toEqual(StatusCodes.NO_CONTENT);
  });
  
});