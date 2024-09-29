import request from "supertest";
import { expect } from "chai";
import { getToken } from "../function/getToken.spec.js";
import { baseUrl } from "../data/config.js";

describe("Get Token Scenario", () =>{
    let token;
    
    it("Positive - Success Get Token", async () =>{
        const response = await getToken(); //header
        
        expect((await response).status).to.equal("success")
        token = ((await response).body)
        console.log(await token)
    })

    // it("Positive - Success Implement Token", async () =>{
    //     //PUT method
    //     const response = await request(baseUrl)
    //         .put("/booking/"+bookingId)
    //         .set("Cookie",token)
    // })

    it("Import token", async () => {
        const token = await getToken()
        console.log(await token)
    })

    //It Get Token
    //It Create
    //It Get
    //It Delete
    //Flow CRUD di API AUTOMATION
})