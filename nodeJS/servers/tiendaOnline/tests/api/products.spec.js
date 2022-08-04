const request = require('supertest');
const app = require('../../app');
const mongoose = require('mongoose');
const Product = require('../../models/product.model');

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

    describe('POST /api/products', () => {

        let response;

        const newProduct = {
            name: 'Picadora Moulinex',
            description: 'Para picar cosas',
            price: 23,
            department: 'test',
            avaliable: true,
            create_at: new Date()
        }

        beforeEach(async () => {
            response = await request(app).post('/api/products').send(newProduct);
        });

        afterAll(async () => {
            await Product.deleteMany({ department: 'test' });
        })

        it('should respond status 201', () => {
            expect(response.statusCode).toBe(201);
        });

        it('should respond JSON', () => {
            expect(response.headers['content-type']).toContain('application/json');
        });

        it('should id is defined', () => {
            expect(response.body._id).toBeDefined();
        });

        it('should respond with same name', () => {
            expect(response.body.name).toBe(newProduct.name);
        });
    });

    describe('POST /api/products with validators', () => {

        afterAll(async () => {
            await Product.deleteMany({ department: 'test' });
        })

        it('should respon error in name when no exist', async () => {
            const response = await request(app).post('/api/products').send({
                description: 'Para picar cosas',
                price: 23,
                department: 'test',
                avaliable: true,
                create_at: new Date()
            });
            expect(response.body.name).toBeDefined();
            expect(response.body.name.msg).toBe('El campo nombre es requerido');
        });

        it('should respon error in name when minleng 3', async () => {
            const response = await request(app).post('/api/products').send({
                name: 'a',
                description: 'Para picar cosas',
                price: 23,
                department: 'test',
                avaliable: true,
                create_at: new Date()
            });
            expect(response.body.name).toBeDefined();
            expect(response.body.name.msg).toBe('El campo debe de tener más de 3 carácteres');
        });

        it('should respon error in available when is false', async () => {
            const response = await request(app).post('/api/products').send({
                name: 'picadora',
                description: 'Para picar cosas',
                price: 23,
                department: 'test',
                avaliable: false,
                create_at: new Date()
            });
            expect(response.body.avaliable).toBeDefined();
            expect(response.body.avaliable.msg).toBe('Las insercciones deben de estar disponibles');
        });
    });

    describe('PUT /api/products/idProduct', () => {

        let response
        const updated = {
            price: 25,
            department: 'test',
        };
        beforeEach(async () => {
            const newProduct = {
                name: 'Picadora Moulinex',
                description: 'Para picar cosas',
                price: 23,
                department: 'test',
                avaliable: true,
                create_at: new Date()
            }

            const product = await Product.create(newProduct);
            response = await request(app).put(`/api/products/${product._id}`).send(updated)
        });

        afterEach(async () => {
            await Product.findByIdAndDelete(response.body._id);
        });

        it('should respon status 200', () => {
            expect(response.statusCode).toBe(200);
        });

        it('should respon json', () => {
            expect(response.headers['content-type']).toContain('json');
        });

        it('should respon same price', () => {
            expect(response.body.price).toBe(updated.price);
        });
    });

    describe('DELETE /api/products/IDPRODUCT', () => {

        let response;
        let product;
        beforeEach(async () => {
            const newProduct = {
                name: 'Picadora Moulinex',
                description: 'Para picar cosas',
                price: 23,
                department: 'test',
                avaliable: true,
                create_at: new Date()
            }

            product = await Product.create(newProduct);
            response = await request(app).delete(`/api/products/${product._id}`).send();
        });

        it('should respond 200', () => {
            expect(response.statusCode).toBe(200);
        });

        it('should respon json', () => {
            console.log(response.headers);
            expect(response.headers['content-type']).toContain('json');
        });

        it('should no exist', async () => {
            const response = await Product.findById(product._id);
            expect(response).toBeNull();
        })
    });
});