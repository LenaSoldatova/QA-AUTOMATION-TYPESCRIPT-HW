import { expect } from 'chai';
import { API_URL, API_KEY } from '../src/config/api-config';
import { before } from 'mocha';
import { ImageService } from '../src/services/image.service';
import { ImageDto } from 'src/models/breed.dto';

describe('The Cat API Integration Tests', () => {

    const breed = 'char';
    let breedId: string;
    let imageId = 'tRy5D7Ncu';
    let image: ImageDto;
    let imageService: ImageService;


    before(async () => {
        imageService =  new ImageService(API_URL, API_KEY);

    });

    it('Retrieves a list of breeds and selects one', async () => {

        const response = await imageService.getMyImages();
        const img = response.filter((item) => item.original_filename === 'Cat03.jpg');
        expect(img).to.have.lengthOf(1);
        imageId = img[0].id;
    });

    it('Check my images', async () => {
        const res = await imageService.getMyImages();
        const body = res.filter((item) => item.original_filename === 'Cat03.jpg');
        expect(body[0].id).to.equal(imageId);
    });

    it('Retrieves breed ID for "char"', async () => {
        const res = await imageService.getBreeds();
        expect(res).to.be.an('array');

        const charBreed = res.find((b) => b.id === breed);
        if (charBreed) {
            breedId = charBreed.id;
            image = charBreed.image;
        }
        expect(charBreed).to.exist;


    });

    it('Test for fetching breed information by image ID', async () => {
        const res = await imageService.getImageBreeds(image.id);
        expect(res.breeds[0].id).to.equal(breedId);
        expect(res.url).to.equal(image.url);
    });
});
