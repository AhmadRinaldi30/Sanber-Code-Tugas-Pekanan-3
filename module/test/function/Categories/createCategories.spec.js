import request from "supertest";
import { baseUrl } from "../../data/config.js";

export async function createCategories(token) {
    const payload = {
        "name": "Testing Category new",
        "description": "Makanan ringan banget"
     }

    const response = await request(baseUrl)
    .post("/categories")
    .send(payload)
    .set("Authorization",`Bearer ${token}`)

    return (await response)
}