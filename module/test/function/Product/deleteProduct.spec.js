import request from "supertest";
import { baseUrl } from "../../data/config.js";

export async function deleteProduct(id_product,token) {
    const response = await request(baseUrl)
    .delete(`/products/${id_product}`)
    .set("Authorization",`Bearer ${token}`)
    
    return (await response)
}