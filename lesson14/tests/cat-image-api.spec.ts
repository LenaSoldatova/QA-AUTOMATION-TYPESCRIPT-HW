import { beforeAll, describe, expect,  test } from 'vitest';
import { ImagesApi } from 'src/services/image.service';

describe('The Cat API Image Tests', () => {
    let imagesApi: ImagesApi;
    let myImageID = '';
    const breed = 'abys';

    beforeAll(() => {
        imagesApi = new ImagesApi();
    });

    test('Check my images', async () => {
        const [response, images] = await imagesApi.getMyImages(30, 0);
        expect(response.status()).toBeOneOf([200, 201]);
        expect(images).toBeInstanceOf(Array);
        expect(images.length).toBeGreaterThan(0);

        images.forEach(image => {
            expect(image).toHaveProperty('id');
            expect(image).toHaveProperty('url');
        });

    });

    test('Uploads an image', async () => {
        const [response, image]  = await imagesApi.uploadImage('artifacts/Cat03.jpg', 'subID_Olena06', [breed]);
        expect(image).to.have.property('id');
        expect(image.url).to.include('https://');
        expect(response.status).toBeOneOf([200, 201]);
        myImageID = image.id;
    });

    test('Check uploaded image', async () => {
        const [response, images] = await imagesApi.getMyImages(30, 0);
        expect(response.status()).toBeOneOf([200, 201]);
        expect(images).toBeInstanceOf(Array);
        const img = images.find((item) => item.id === myImageID);
        expect(img).to.exist;
        if (img) {
            expect(img.original_filename).to.equal('Cat03.jpg');
        }

    });

    test('Check Get Image By ID', async () => {
        const [response, image] = await imagesApi.getImageById(myImageID);
        expect(response.status()).toBeOneOf([200, 201]);
        expect(image).to.exist;
        if (image) {
            expect(image.id).toBe(myImageID);
        }

    });

    test('Check Get Breeds by image id', async () => {
        const [response, image] = await imagesApi.getBreedsByImageId(myImageID, breed);
        expect(response.status()).toBeOneOf([200, 201]);
        expect(image).to.exist;
        if (image) {
            expect(image.id).toBe(breed);
        }

    });

});
