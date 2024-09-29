import request from "supertest";
import { expect } from "chai";
import { addCustomer } from "../../function/Customer/createCustomer.spec.js"
import { getToken } from "../../function/getToken.spec.js";
import { tokenBarrier } from "../../data/config.js"

// describe create customer
describe("Tambah customer terbaru", () => {
it('sukses melakukan tambah customer', async()=>{
   const response = await addCustomer(await tokenBarrier);
   // assertion memakai chai
   expect((await response).body);
});
});
describe("Tambah customer terbaru", () => {
   it('status tambah success', async()=>{
      const response = await addCustomer(await tokenBarrier);
      // assertion memakai chai
      expect((await response).status).to.equal("success")
   });
   });

describe("Tambah customer terbaru", () => {
      it('message success tambah data "Customer berhasil ditambahkan"', async()=>{
         const response = await addCustomer(await tokenBarrier);
         // assertion memakai chai
         expect((await response).message).to.equal("Customer berhasil ditambahkan");
         console.log((await response))
      });
});

