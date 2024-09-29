import request from "supertest";
import { baseUrl } from "../../data/config.js";


export async function addCustomer(token) {
    const payload = {
        "name": "Costumer baru",
        "phone": "081288343447",
        "address": "Jakarta",
        "description": "Pelanggan Terbaru 3"
     };

    const response = await request(baseUrl)
    .post("/customers")
    .send(payload)
    .set("Authorization",`Bearer ${token}`);

    const cus = ((await response).body);
    return cus;
};