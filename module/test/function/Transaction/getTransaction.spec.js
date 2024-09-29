import request from "supertest";
import { baseUrl } from "../../data/config.js";

export async function  getTransactionAll(token) {
    const response = await request(baseUrl) // base url
    .get("/purchases") // endpoint get product
    .set("Authorization",`Bearer ${token}`)
    return (await response)
}

export async function getTransactionId(id_purchases, token) {
    const response = await request(baseUrl) // base url
    .get(`/purchases/${id_purchases}`) // endpoint Transaction
    .set("Authorization",`Bearer ${token}`)
    return (await response)
}
