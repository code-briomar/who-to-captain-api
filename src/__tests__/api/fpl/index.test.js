import request from "supertest"
import {app} from "../../../app.js"

//managerID
const managerID = 4791912;
describe("Test GET /future-fixtures-difficulty/:managerID",()=>{
    test("Status 200 - Successful",async()=>{
        await request(app)
            .get(`/future-fixtures-difficulty/${managerID}`)
            .expect(200)
    })
    test("Content Type Should be JSON",async()=>{
        await request(app)
            .get(`/future-fixtures-difficulty/${managerID}`)
            .expect("Content-Type",/json/)
    })

    test("JSON body props",async()=>{
        const response = await request(app)
            .get(`/future-fixtures-difficulty/${managerID}`)

        expect(response.body[0]).toHaveProperty("fixtureID")
        expect(response.body[0]).toHaveProperty("playerID")
        expect(response.body[0]).toHaveProperty("teamID")
        expect(response.body[0]).toHaveProperty("homeTeamID")
        expect(response.body[0]).toHaveProperty("awayTeamID")
        expect(response.body[0]).toHaveProperty("kickOffTime")
    })
})

describe("Test GET /expected-points/:managerID",()=>{
    test("Status 200 - Successful",async()=>{
        await request(app)
            .get(`/expected-points/${managerID}`)
            .expect(200)
    })
    test("Content Type Should be JSON",async()=>{
        await request(app)
            .get(`/expected-points/${managerID}`)
            .expect("Content-Type",/json/)
    })

    test("JSON body props",async()=>{
        const response = await request(app)
            .get(`/expected-points/${managerID}`)

        expect(response.body[0]).toHaveProperty("playerID")
        expect(response.body[0]).toHaveProperty("playerEPThisFixture")
        expect(response.body[0]).toHaveProperty("playerEPNextFixture")
    })
})

describe("Test GET /player-form/:managerID",()=>{
    test("Status 200 - Successful",async()=>{
        await request(app)
            .get(`/player-form/${managerID}`)
            .expect(200)
    })
    test("Content Type Should be JSON",async()=>{
        await request(app)
            .get(`/player-form/${managerID}`)
            .expect("Content-Type",/json/)
    })

    test("JSON body props",async()=>{
        const response = await request(app)
            .get(`/player-form/${managerID}`)
    })

    test("JSON body props",async()=>{
        const response = await request(app)
            .get(`/player-form/${managerID}`)

        expect(response.body[0]).toHaveProperty("playerID")
        expect(response.body[0]).toHaveProperty("playerForm")
    })
})
