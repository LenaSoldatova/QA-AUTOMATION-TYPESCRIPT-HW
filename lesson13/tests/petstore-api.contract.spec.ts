import { Pact } from '@pact-foundation/pact';
import request from 'supertest';
import { expect } from 'chai';

const provider = new Pact({
  consumer: 'PetStoreConsumer',
  provider: 'PetStoreAPI',
  port: 8081,
});

describe('Pact contract tests for PetStore API', () => {
  before(() => provider.setup());
  after(() => provider.finalize());

  // Defining a contract for retrieving pet details
  describe('GET /pet/{petId}', () => {
    before(() => {
      return provider.addInteraction({
        state: 'A pet with ID 1 exists',
        uponReceiving: 'a request for pet ID 1',
        withRequest: {
          method: 'GET',
          path: '/v2/pet/1',
        },
        willRespondWith: {
          status: 200,
          headers: { 'Content-Type': 'application/json' },
          body: {
            id: 1,
            name: 'Fluffy',
            status: 'available',
          },
        },
      });
    });

    // Test for retrieving pet details
    it('Returns the pet details', async () => {
      const res = await request(provider.mockService.baseUrl).get('/v2/pet/1');
      expect(res.status).to.equal(200);
      expect(res.body).to.deep.equal({
        id: 1,
        name: 'Fluffy',
        status: 'available',
      });
    });
  });

  afterEach(() => provider.verify());
});