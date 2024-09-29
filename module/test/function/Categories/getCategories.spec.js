import request from "supertest";
import { baseUrl } from "../../data/config.js";

export async function  getCategoriesParams(page_id, testing_category, token) {
    const response = await request(baseUrl) // base url
    .get(`/categories?page=${page_id}&q= ${testing_category}`) // endpoint categories
    .set("Authorization",`Bearer ${token}`)
    return (await response)
}

export async function getCategoriesId(id_category,token) {
    let response = await request(baseUrl) // base url
    .get(`/categories/${id_category}`) // endpoint categories params
    .set("Authorization",`Bearer ${token}`)
    return (await response)
}
