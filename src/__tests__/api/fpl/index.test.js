import request from "supertest"
import {app} from "../../../app.js"
describe("Test GET /general-info",()=>{
    //Retrieve general info
    test("Should return a statusCode of 200",async ()=>{
        await request(app).get("/all").expect(200)
    }),

    test("Content type should be in JSON format",async ()=>{
        await request(app).get("/all").expect('Content-Type',/json/)
    })
})

describe("Test GET /fixtures",()=>{
    //All fixtures of the season
    test("Should return a status code of 200",async()=>{
        await request(app).get("/fixtures").expect(200)
    }),

    test("Content type should be in JSON format",async()=>{
        await request(app).get("/fixtures").expect("Content-Type",/json/)
    })

    //Fixtures for a particular game week
    const eventID = 13;
    test("Should return a status code of 200 on /fixtures:event",async()=>{
        await request(app).get(`/fixtures?event=${eventID}`).expect(200)
    })

    test("Content type should be in JSON format",async()=>{
        await request(app).get(`/fixtures?event=${eventID}`).expect("Content-Type",/json/)
    })

    //Fixtures for a future game week
    const futureID = 38;
    test("Should return status code 200 on /fixtures:future",async()=>{
        await request(app).get(`/fixtures?future=${futureID}`).expect(200)
    })

    test("Content Type should be in JSON format",async()=>{
        await request(app).get(`/fixtures?future=${futureID}`).expect(200).expect("Content-Type",/json/)
    })
})

describe("Test GET /team-per-gameweek/:IDs",()=>{
    const testData = {
        managerID: 4791912,
        eventID: 8
    }

    const params = JSON.stringify(testData)

    test("Should return 200",async()=>{
        await request(app)
            .get(`/team-per-gameweek/${params}`)
            .expect(200)
    })

    test("Content Type Should be JSON",async()=>{
        await request(app)
            .get(`/team-per-gameweek/${params}`)
            .expect("Content-Type",/json/)
    })

    test("JSON should have `picks` body",async()=>{
        const response = await request(app)
            .get(`/team-per-gameweek/${params}`)

        expect(response.body).toHaveProperty("picks")
    })
})