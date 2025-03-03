import { StatusCodes } from "http-status-codes";
import { testServer } from "../jest.setup";


//  Funcao global do jest, nao precisa importar
describe('Cidades - Pegar todas', () => {

  it('Get All Cities', async () => {

    // Para poder testar, primeiro criamos uma cidade e depois deletamos
    const res1 = await testServer.post('/cidades').send({ "name": "Santa Catarina" }).expect(201);
    expect(res1.statusCode).toEqual(StatusCodes.CREATED);

    const res2 = await testServer.get('/cidades?page=2&?limit=5&?filter=2').expect(200);

    // o que eu recebo, o que eu espero receber do teste
    expect(Number(res2.header['x-total-count'])).toBeGreaterThan(0);
    expect(res2.statusCode).toEqual(StatusCodes.OK);
    expect(res2.body.length).toBeGreaterThan(0);
  });

});