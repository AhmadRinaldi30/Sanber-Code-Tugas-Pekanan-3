import request from "supertest";
import { baseUrl } from "../../data/config.js";
import { id_product } from "../../data/parameter.js";

export async function createTransaction(token) {
    const payload = {
        "officeId": "a7ef783f-c82d-4775-b512-2cc255d20c30",
        "date": "2024-09-29",
        "invoice": "INV/15/09/2024/001",
        "amount": 45000,
        "discount": 10000,
        "description": "Testing tansaction NEW",
        "items" : [
            {
                "productId": id_product,
                "quantity": 6,
                "cost": 4000
            }
        ]
     }

    const response = await request(baseUrl)
    .post("/purchases")
    .send(payload)
    .set("Authorization",`Bearer ${token}`)

    return (await response)
}