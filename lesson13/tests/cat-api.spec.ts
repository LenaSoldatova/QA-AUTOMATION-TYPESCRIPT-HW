import { expect } from 'chai';
import { API_URL, setupAPIRequest } from '../src/config/api-config';
import { before } from 'mocha';
import { APIRequestContext } from '@playwright/test';

describe('The Cat API Integration Tests', () => {
    let imageId: string;
    let request: APIRequestContext;
    before(async () => {
        request = await setupAPIRequest();
    });
    it('Retrieves a list of images', async () => {
        const res = await request.get(`${API_URL}/images/search`);
        const body = await res.json();
        expect(res.status()).to.equal(200);
        expect(body).to.be.an('array');
        expect(body[0]).to.have.property('id');
        imageId = body[0].id;
    });

    it('Uses the retrieved imageId', async () => {
        expect(imageId).to.be.a('string');
        expect(imageId).to.have.length.above(0);
    });
});
