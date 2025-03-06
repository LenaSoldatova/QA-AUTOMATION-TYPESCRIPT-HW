import request from 'supertest';
import { expect } from 'chai';
import { API_URL, headers } from '../src/config/api-config';

describe('The Cat API Integration Tests', () => {
    let imageId: string;
    let voteId: string;
    let favouriteId: string;

    // Test for retrieving a list of images
    it('Retrieves a list of images', async () => {
        const res = await request(API_URL)
            .get('/images/search')
            .set(headers);
        
        expect(res.status).to.equal(200);
        expect(res.body).to.be.an('array');
        expect(res.body[0]).to.have.property('id');
        imageId = res.body[0].id;
    });

    // Test for fetching breed information by image ID
    it('Fetches breed information by image ID', async () => {
        const res = await request(API_URL)
            .get(`/images/${imageId}`)
            .set(headers);
        
        expect(res.status).to.equal(200);
        expect(res.body).to.have.property('id');
        if (res.body.breeds) {
            expect(res.body.breeds).to.be.an('array');
        }
    });

    // Test for voting on an image
    it('Votes for an image', async () => {
        const res = await request(API_URL)
            .post('/votes')
            .set(headers)
            .send({ image_id: imageId, value: 1 });
        
        expect(res.status).to.be.oneOf([200, 201]);
        expect(res.body).to.have.property('id');
        voteId = res.body.id;
    });

    // Test for adding an image to favorites
    it('Adds an image to favorites', async () => {
        const res = await request(API_URL)
            .post('/favourites')
            .set(headers)
            .send({ image_id: imageId });
        
        expect(res.status).to.equal(200);
        expect(res.body).to.have.property('id');
        favouriteId = res.body.id;
    });

    // Test for deleting a vote
    it('Deletes a vote', async () => {
        if (!voteId) {
            console.warn('Skipped: voteId is missing');
            return;
        }
        const res = await request(API_URL)
            .delete(`/votes/${voteId}`)
            .set(headers);
        
        expect(res.status).to.be.oneOf([200, 404]);
    });

    // Test for removing an image from favorites
    it('Removes an image from favorites', async () => {
        const res = await request(API_URL)
            .delete(`/favourites/${favouriteId}`)
            .set(headers);
        
        expect(res.status).to.equal(200);
    });
});