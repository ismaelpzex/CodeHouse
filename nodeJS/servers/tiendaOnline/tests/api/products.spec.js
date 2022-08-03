const request = require('supertest');
const app = require('../../app');

describe('Api products tests', () => {
    describe('GET /api/products', () => {
        it('sould respon status 200', async () => {
            const response = await request(app).get('/api/products').send();
            expect(response.statusCode).toBe(200);
        });
    });
});