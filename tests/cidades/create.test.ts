import { StatusCodes } from "http-status-codes";
import { testServer } from "../jest.setup";


//  Funcao global do jest, nao precisa importar
describe('Cidades - Create', () => {

  it('Criar uma cidade', async () => {
    const res1 = await testServer.post('/cidades').send({ name: 'São Paulo' }).expect(201);

    // o que eu recebo, o que eu espero receber do teste
    expect(res1.statusCode).toEqual(StatusCodes.CREATED);
    expect(typeof res1.body).toEqual('number');
  });


  it('Criar uma cidade - Nome curto', async () => {
    const res1 = await testServer.post('/cidades').send({ name: 'Sã' }).expect(400);

    // o que eu recebo, o que eu espero receber do teste
    expect(res1.statusCode).toEqual(StatusCodes.BAD_REQUEST);
    expect(res1.body).toHaveProperty("errors.body.name");
  });
  
});