import request from "supertest"
import {app} from "../../../app.js"

describe("Test GET /future-fixtures-difficulty/:IDs",()=>{
    const testData = {
        managerID: 4791912,
        eventID: 8
    }

    const params = JSON.stringify(testData)

    test("Should return 200",async()=>{
        await request(app)
            .get(`/future-fixtures-difficulty/${params}`)
            .expect(200)
    })

    test("Content Type Should be JSON",async()=>{
        await request(app)
            .get(`/future-fixtures-difficulty/${params}`)
            .expect("Content-Type",/json/)
    })

    test("JSON body props",async()=>{
        const response = await request(app)
            .get(`/future-fixtures-difficulty/${params}`)

        expect(response.body[0]).toHaveProperty("fixtureID")
        expect(response.body[0]).toHaveProperty("playerID")
        expect(response.body[0]).toHaveProperty("teamID")
        expect(response.body[0]).toHaveProperty("homeTeamID")
        expect(response.body[0]).toHaveProperty("awayTeamID")
        expect(response.body[0]).toHaveProperty("homeTeamDifficulty")
        expect(response.body[0]).toHaveProperty("awayTeamDifficulty")
        expect(response.body[0]).toHaveProperty("kickOffTime")
    })
})

describe("Test GET /expected-points/:IDs",()=>{
    const testData = {
        managerID: 4791912,
        eventID: 8
    }
    test("Status 200 - Successful",async()=>{
        await request(app)
            .get(`/expected-points/${JSON.stringify(testData)}`)
            .expect(200)
    })
    test("Content Type Should be JSON",async()=>{
        await request(app)
            .get(`/expected-points/${JSON.stringify(testData)}`)
            .expect("Content-Type",/json/)
    })

    test("JSON body props",async()=>{
        const response = await request(app)
            .get(`/expected-points/${JSON.stringify(testData)}`)


        expect(response.body[0]).toHaveProperty("playerID")
        expect(response.body[0]).toHaveProperty("playerEPThisFixture")
        expect(response.body[0]).toHaveProperty("playerEPNextFixture")
    })
})

describe("Test GET /player-form/:IDs",()=>{
    const testData = {
        managerID: 4791912,
        eventID: 8
    }
    test("Status 200 - Successful",async()=>{
        await request(app)
            .get(`/player-form/${JSON.stringify(testData)}`)
            .expect(200)
    })
    test("Content Type Should be JSON",async()=>{
        await request(app)
            .get(`/player-form/${JSON.stringify(testData)}`)
            .expect("Content-Type",/json/)
    })

    test("JSON body props",async()=>{
        const response = await request(app)
            .get(`/player-form/${JSON.stringify(testData)}`)


        expect(response.body[0]).toHaveProperty("playerID")
        expect(response.body[0]).toHaveProperty("playerForm")
        expect(response.body[0]).toHaveProperty("playerValueForm")
        })
})