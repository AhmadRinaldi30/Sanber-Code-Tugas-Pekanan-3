import request from "supertest";
import { baseUrl } from "../../data/config.js";


export async function updateProduct(id_product,token) {
    const payload = {
        "category_id" : "2b054c40-ba18-46d7-adb1-c258ccad0826",
        "code": "A314ASDDFIER3447",
        "name": "Product baru update",
        "price": "8000",
        "cost": "5000",
        "stock": "5"
     }

    const response = await request(baseUrl)
    .put(`/products/${id_product}`)
    .send(payload)
    .set("Authorization",`Bearer ${token}`)

    return (await response)
    
}