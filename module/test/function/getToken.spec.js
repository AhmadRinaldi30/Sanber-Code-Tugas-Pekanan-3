import request from "supertest";
import { baseUrl } from "../data/config.js";

export async function getToken(){
    const payload = {
        "email": "sample1@ex.com",
        "password" : "123adsfadf@"
    }
    //send request
    const response = await request (baseUrl)
        .post("/authentications") //endpoint
        .send(payload)  //request body
        .set("Content-Type","application/json")
       
    const token = ((await response).body)
    return token;
}



