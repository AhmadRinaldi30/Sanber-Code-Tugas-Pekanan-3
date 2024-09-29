import request from "supertest";
import { expect } from "chai";
import { createTransaction } from "../../function/Transaction/createTransaction.spec.js"
import { getToken } from "../../function/getToken.spec.js";
import { tokenBarrier } from "../../data/config.js"

// describe create Transaction
describe("Tambah transaction terbaru", () => {
it('sukses melakukan tambah transaction', async()=>{
   const response = await createTransaction(await tokenBarrier);
   // assertion memakai chai
   expect((await response).body);
   console.log((await response).body)
});

it('status tambah success', async()=>{
    const response = await createTransaction(await tokenBarrier);
    // assertion memakai chai
    expect((await response).body.status).to.equal("success")
 });


 it('message success tambah data "Transaciton berhasil ditambahkan"', async()=>{
    const response = await createTransaction(await tokenBarrier);
    // assertion memakai chai
    expect((await response).body.message).to.equal("transaksi ditambahkan");
 });

 it('message success tambah data dengan status Code 200"', async()=>{
    const response = await createTransaction(await tokenBarrier);
    // assertion memakai chai
    expect((await response).status).to.equal(201);
 });

});