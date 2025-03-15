import { beforeAll, describe, expect,  test } from 'vitest';
import { BreedApi } from 'src/services/breed.service';

describe('The Cat API Image Tests', () => {
    let breedApi: BreedApi;
    const breedName = 'American Bobtail';
    let breedId = '';

    beforeAll(() => {
        breedApi = new BreedApi();
    });
    test('Check my images', async () => {
        const [response, breeds] = await breedApi.getBreeds(30, 0);
        expect(response.status()).toBeOneOf([200, 201]);
        expect(breeds).toBeInstanceOf(Array);
        expect(breeds.length).toBeGreaterThan(0);

        breeds.forEach(breed => {
            expect(breed).toHaveProperty('id');
            expect(breed).toHaveProperty('name');
        });
        breedId = breeds.filter(breed => breed.name === breedName)[0].id;
    });

    test('Check Get Breed By ID', async () => {
        const [response, breed] = await breedApi.getBreedById(breedId);
        expect(response.status()).toBeOneOf([200, 201]);
        expect(breed).toHaveProperty('id');
        expect(breed).toHaveProperty('name');
        expect(breed.id).toEqual(breedId);
        expect(breed.name).toEqual(breedName);
    });
});
