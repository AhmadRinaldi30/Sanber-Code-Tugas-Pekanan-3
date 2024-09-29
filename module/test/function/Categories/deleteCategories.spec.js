import request from "supertest";
import { baseUrl } from "../../data/config.js";

export async function deleteCategories(id_category,token) {
    const response = await request(baseUrl)
    .delete(`/categories/${id_category}`)
    .set("Authorization",`Bearer ${token}`)

    return (await response)
}