import request from "supertest";
import { baseUrl } from "../../data/config.js";


export async function  getAllCustomer(token) {
    const response = await request(baseUrl) // base url
    .get("/customers") // endpoint customer
    .set("Authorization",`Bearer ${token}`)
    const cus = ((await response));
    return cus;
}

export async function getCustomerId(id_customer,token) {
    let response = await request(baseUrl) // base url
    .get(`/customers/${id_customer}`) // endpoint customer params
    .set("Authorization",`Bearer ${token}`)
    const cus = ((await response));
    return cus;
}
