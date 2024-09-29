import request from "supertest";
import { baseUrl } from "../../data/config.js";
import { id_category } from "../../data/parameter.js";

export async function createProduct(token) {
    const payload = {
        "category_id" : id_category,
        "code": "A314ASDDFIER3447",
        "name": "Testing Produk NEW",
        "price": "7000",
        "cost": "4000",
        "stock": "6"
     }

    const response = await request(baseUrl)
    .post("/products")
    .send(payload)
    .set("Authorization",`Bearer ${token}`)

    return (await response)
}