import request from "supertest"
import { app } from "../../../app.js"

//managerID
const managerID = 4791912;

describe('Test GET /who-to-captain/:managerID', () => {
    test('Status 200 - Successful', async () => {
        await request(app)
            .get(`/who-to-captain/${managerID}`)
            .expect(200)
    })
});

describe('Test GET /manager', () => {
    const managerUserName = "Mk. .";

    test('Status 200 - Successful', async () => {
        await request(app)
            .get(`/manager/${managerUserName}`)
            .expect(200)
    })
});