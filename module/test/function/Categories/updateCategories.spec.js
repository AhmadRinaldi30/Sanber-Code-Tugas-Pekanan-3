import request from "supertest";
import { baseUrl } from "../../data/config.js";

export async function updateCategories(id_category,token) {
    const payload = {
        "name": "Testing Category update",
        "description": "Testing Category update"
     }

    const response = await request(baseUrl)
    .put(`/categories/${id_category}`)
    .send(payload)
    .set("Authorization",`Bearer ${token}`)

    return (await response)
    
}