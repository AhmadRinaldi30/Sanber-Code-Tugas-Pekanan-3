import request from "supertest";
import { baseUrl } from "../../data/config.js";

export async function deleteCustomer(id_customer,token) {
    const response = await request(baseUrl)
    .delete(`/customers/${id_customer}`)
    .set("Authorization",`Bearer ${token}`)

    return (await response)
}