import request from "supertest";
import { expect } from "chai";
import { createCategories } from "../../function/Categories/createCategories.spec.js"
// import { getToken } from "../../function/getToken.spec.js";
import { tokenBarrier } from "../../data/config.js"

// describe create customer
describe("Tambah categories terbaru", () => {
    it('sukses melakukan tambah categories terbaru', async()=>{
       const response = await createCategories(await tokenBarrier);
       // assertion memakai chai
       expect((await response).body);
    });

    it('status tambah success', async()=>{
        const response = await createCategories(await tokenBarrier);
        // assertion memakai chai
        expect((await response).body.status).to.equal("success")
     });

     it('message success tambah data "Category berhasil ditambahkan"', async()=>{
        const response = await createCategories(await tokenBarrier);
        // assertion memakai chai
        expect((await response).body.message).to.equal("Category berhasil ditambahkan");
        console.log((await response).body)
     });
     
     it('status tambah berhasil status code is 200', async()=>{
        const response = await createCategories(await tokenBarrier);
        // assertion memakai chai
        expect((await response).status).to.equal(200)// failed expected untuk status code adalah 200
     });
    });   
   