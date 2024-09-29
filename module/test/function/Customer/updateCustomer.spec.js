import request from "supertest";
import { baseUrl } from "../../data/config.js";


export async function updateCustomer(id_customer,token) {
    const payload = {
        "name": "Costumer baru update",
        "phone": "081288343447",
        "address": "Jakarta",
        "description": "Pelanggan Terbaru"
     }

    const response = await request(baseUrl)
    .put(`/customers/${id_customer}`)
    .send(payload)
    .set("Authorization",`Bearer ${token}`)

    return (await response)
    
}