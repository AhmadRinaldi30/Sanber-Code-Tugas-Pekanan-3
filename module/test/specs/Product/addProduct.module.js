import request from "supertest";
import { expect } from "chai";
import { createProduct } from "../../function/Product/createProduct.spec.js"
import { getToken } from "../../function/getToken.spec.js";
import { tokenBarrier } from "../../data/config.js"

// describe create customer
describe("Tambah product terbaru", () => {
it('sukses melakukan tambah product', async()=>{
   const response = await createProduct(await tokenBarrier);
   // assertion memakai chai
   expect((await response).body);
   console.log((await response).body)
});

it('status tambah success', async()=>{
    const response = await createProduct(await tokenBarrier);
    // assertion memakai chai
    expect((await response).body.status).to.equal("success")
 });


 it('message success tambah data "Product berhasil ditambahkan"', async()=>{
    const response = await createProduct(await tokenBarrier);
    // assertion memakai chai
    expect((await response).body.message).to.equal("Product berhasil ditambahkan");
 });

 it('message success tambah data dengan status Code 200"', async()=>{
    const response = await createProduct(await tokenBarrier);
    // assertion memakai chai
    expect((await response).status).to.equal(200);
 });

});