import request from "supertest"
import { app } from "../../../app.js"

// Valid test data
const validManagerID = 4791912;
const validManagerUserName = "Mk. .";

describe('API Endpoints', () => {
    describe('GET /', () => {
        test('Should return welcome message', async () => {
            const response = await request(app)
                .get('/')
                .expect(200);
            
            expect(response.body).toHaveProperty('message');
            expect(response.body.message).toBe('Fetch a shortlist for your FPL captain for this game week.');
        });
    });

    describe('Input Validation Tests', () => {
        describe('GET /who-to-captain/:managerID', () => {
            test('Should return 400 for invalid manager ID (string)', async () => {
                const response = await request(app)
                    .get('/who-to-captain/invalid')
                    .expect(400);
                
                expect(response.body).toHaveProperty('error');
                expect(response.body.error).toBe('Invalid manager ID. Must be a positive number.');
            });

            test('Should return 400 for negative manager ID', async () => {
                const response = await request(app)
                    .get('/who-to-captain/-123')
                    .expect(400);
                
                expect(response.body).toHaveProperty('error');
                expect(response.body.error).toBe('Invalid manager ID. Must be a positive number.');
            });

            test('Should return 400 for zero manager ID', async () => {
                const response = await request(app)
                    .get('/who-to-captain/0')
                    .expect(400);
                
                expect(response.body).toHaveProperty('error');
                expect(response.body.error).toBe('Invalid manager ID. Must be a positive number.');
            });
        });

        describe('GET /manager/:managerUserName', () => {
            test('Should return 400 for empty username', async () => {
                const response = await request(app)
                    .get('/manager/%20') // URL encoded space
                    .expect(400);
                
                expect(response.body).toHaveProperty('error');
                expect(response.body.error).toBe('Manager username is required.');
            });
        });

        describe('GET /expected-points/:managerID', () => {
            test('Should return 400 for invalid manager ID', async () => {
                const response = await request(app)
                    .get('/expected-points/invalid')
                    .expect(400);
                
                expect(response.body).toHaveProperty('error');
                expect(response.body.error).toBe('Invalid manager ID. Must be a positive number.');
            });
        });

        describe('GET /player-form/:managerID', () => {
            test('Should return 400 for invalid manager ID', async () => {
                const response = await request(app)
                    .get('/player-form/invalid')
                    .expect(400);
                
                expect(response.body).toHaveProperty('error');
                expect(response.body.error).toBe('Invalid manager ID. Must be a positive number.');
            });
        });

        describe('GET /future-fixtures-difficulty/:managerID', () => {
            test('Should return 400 for invalid manager ID', async () => {
                const response = await request(app)
                    .get('/future-fixtures-difficulty/invalid')
                    .expect(400);
                
                expect(response.body).toHaveProperty('error');
                expect(response.body.error).toBe('Invalid manager ID. Must be a positive number.');
            });
        });
    });

    describe('404 Handler', () => {
        test('Should return 404 for non-existent routes', async () => {
            const response = await request(app)
                .get('/non-existent-route')
                .expect(404);
            
            expect(response.body).toHaveProperty('error');
            expect(response.body.error).toBe('Route not found');
            expect(response.body.status).toBe(404);
        });
    });
});