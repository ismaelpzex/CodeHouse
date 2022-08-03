const request = require('supertest');
const app = require('../../app');
const mongoose = require('mongoose');

describe('Api products tests', () => {
    beforeAll(async () => {
        await mongoose.connect('mongodb://127.0.0.1/tienda-online');
    });

    afterAll(async () => {
        await mongoose.disconnect()
    })

    describe('GET /api/products', () => {

        let response;
        beforeAll(async () => {
            response = await request(app).get('/api/products').send();
        });

        it('sould respon status 200', () => {
            expect(response.statusCode).toBe(200);
        });

        it('shoul respon JSON format', () => {
            expect(response.headers['content-type']).toContain('application/json');
        });

        it('should respon with array', () => {
            expect(response.body).toBeInstanceOf(Array);
        });
    });
});