import request from "supertest"
import {app} from "../../../app.js"
describe("Test GET /all",()=>{
    test("Should return a statusCode of 200",async ()=>{
        await request(app).get("/all").expect(200)
    }),

    test("Content type should be in JSON format",async ()=>{
        await request(app).get("/all").expect('Content-Type',/json/)
    })
})