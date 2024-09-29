import request from "supertest";
import { expect } from "chai";
import { deleteProduct } from "../../function/Product/deleteProduct.spec.js"
// import { getToken } from "../../function/getToken.spec.js";
import { tokenBarrier } from "../../data/config.js"
// import { id_customer } from "../../data/parameter.js";

const id_product = "7868bd3e-3f9b-414e-9bef-53035d5837a4";
// describe scenario delete product
describe("Sukses untuk melakukan delete data", () => {
    it('sukses melakukan delete data', async() =>{
       const response = await deleteProduct(await id_product, await tokenBarrier)
       // assertion memakai chai
       expect((await response).body)
       console.log((await response).body.data)
    })

    it('sukses melakukan delete data status is success', async()=>{
        const response = await deleteProduct(await id_product, await tokenBarrier)
        // assertion memakai chai
        expect((await response).body.status).to.equal("success");
     })

     it('sukses melakukan delete data status code is 200', async()=>{
        const response = await deleteProduct(await id_product, await tokenBarrier)
        // assertion memakai chai
        expect((await response).status).to.equal(200);
     })
})