import request from "supertest";
import { baseUrl } from "../../data/config.js";
import { id_category } from "../../data/parameter.js";

export async function  getProductAll(token) {
    const response = await request(baseUrl) // base url
    .get("/products") // endpoint get product
    .set("Authorization",`Bearer ${token}`)
    return (await response)
}

export async function getProductParams(p, nm_product, id_category,token) {
    let response = await request(baseUrl) // base url
    .get(`/products?page=${p}&q=${nm_product}&withStock=true&withCategory=true&categoryId=${id_category}`) // endpoint product id
    .set("Authorization",`Bearer ${token}`)
    return (await response)
}
