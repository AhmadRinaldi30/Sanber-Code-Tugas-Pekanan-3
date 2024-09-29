import request from "supertest";
import { expect } from "chai";
import { deleteCustomer } from "../../function/Customer/deleteCustomer.spec.js"
// import { getToken } from "../../function/getToken.spec.js";
import { tokenBarrier } from "../../data/config.js"
// import { id_customer } from "../../data/parameter.js";

const id_customer = "7288f463-7fe4-4e74-a51d-162f131eb08f";
// describe scenario delete customer
describe("Sukses untuk melakukan delete data", () => {
    it('sukses melakukan delete data', async() =>{
       const response = await deleteCustomer(await id_customer, await tokenBarrier)
       // assertion memakai chai
       expect((await response).body)
       console.log((await response).body.data)
    })

    it('sukses melakukan delete data status is success', async()=>{
        const response = await deleteCustomer(await id_customer, await tokenBarrier)
        // assertion memakai chai
        expect((await response).body.status).to.equal("success");
     })

     it('sukses melakukan delete data status code is 200', async()=>{
        const response = await deleteCustomer(await id_customer, await tokenBarrier)
        // assertion memakai chai
        expect((await response).status).to.equal(200);
     })
})