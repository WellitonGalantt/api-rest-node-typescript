import supertest from 'supertest';

import { server } from '../src/server/server';

export const testServer = supertest(server);

// testServer.post('/cidades').send({"name": "São Paulo"}).expect(201);