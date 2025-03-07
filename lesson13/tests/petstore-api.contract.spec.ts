import { expect } from 'chai';
import { PactProvider } from '../src/config/pact-provider';
import { PetStoreService } from '../src/services/pet-store.service';

describe('PactV4 PetsStore tests: Consumer', () => {
    let petStoreService: PetStoreService;

    describe('create /pet', () => {
        it('creates the requested pet', () => {
            return PactProvider.provider
                .addInteraction()
                .given('pet interaction')
                .uponReceiving('create a pet')
                .withRequest('POST', '/v2/pet', (builder) => {
                    builder.headers({ Accept: 'application/json', 'Content-Type': 'application/json' });
                    builder.jsonBody(PactProvider.petExample);
                })
                .willRespondWith(200, (builder) => {
                    builder.headers({ 'Content-Type': 'application/json' });
                    builder.jsonBody(PactProvider.EXPECTED_BODY);
                })
                .executeTest(async (mockServer) => {
                    petStoreService = new PetStoreService(mockServer.url);
                    const responsePost = await petStoreService.createPet(PactProvider.petExample);
                    expect(responsePost.data).to.deep.eq(PactProvider.petExample);
                });
        });
        it('retrieves the requested pet', () => {
            return PactProvider.provider
                .addInteraction()
                .given('pet interaction')
                .uponReceiving('retrieve a pet')
                .withRequest('GET', '/v2/pet/1002', (builder) => {
                    builder.headers({ Accept: 'application/json' });
                })
                .willRespondWith(200, (builder) => {
                    builder.headers({ 'Content-Type': 'application/json' });
                    builder.jsonBody(PactProvider.EXPECTED_BODY);
                })
                .executeTest(async (mockServer) => {
                    petStoreService = new PetStoreService(mockServer.url);
                    const responseGet = await petStoreService.getPet(1002);
                    expect(responseGet.data).to.deep.eq(PactProvider.petExample);
                });
        });
    });
});
