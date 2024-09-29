import request from "supertest";
import { expect } from "chai";
import { deleteCategories } from "../../function/Categories/deleteCategories.spec.js"
// import { getToken } from "../../function/getToken.spec.js";
import { tokenBarrier } from "../../data/config.js"
import { id_category } from "../../data/parameter.js";

// const id_category = "a0ebb55a-f631-4dcf-9c5b-46abf6a7d41c";

describe("Sukses untuk melakukan delete data", () => {
    it('sukses melakukan delete data', async()=>{
       const response = await deleteCategories(await id_category, await tokenBarrier)
       // assertion memakai chai
       expect((await response).body)
       console.log((await response).body.data)
    })

    it('sukses melakukan delete data status is success', async()=>{
        const response = await deleteCategories(await id_category, await tokenBarrier)
        // assertion memakai chai
        expect((await response).body.status).to.equal("success");
     })

     it('sukses melakukan delete data status code is 200', async()=>{
        const response = await deleteCategories(await id_category, await tokenBarrier)
        // assertion memakai chai
        expect((await response).status).to.equal(200);
     })
})