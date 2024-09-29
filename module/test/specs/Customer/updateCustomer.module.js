import request from "supertest";
import { assert, expect } from "chai";
import { updateCustomer } from "../../function/Customer/updateCustomer.spec.js"
// import { getToken } from "../../function/getToken.spec.js";
import { tokenBarrier } from "../../data/config.js"
import { id_customer } from "../../data/parameter.js" 


describe("Update customer", () => {  
    it('sukses melakukan update customer', async()=>{
       const response = await updateCustomer(await id_customer ,await tokenBarrier)
       // assertion memakai chai
       expect((await response).body)
       console.log((await response).body.data)
    })

    it('sukses melakukan update status is 200', async()=>{
      const response = await updateCustomer(await id_customer ,await tokenBarrier)
      // assertion memakai chai
      expect((await response).status).to.equal(200)
    })

   it('sukses melakukan update status is "success"', async()=>{
      const response = await updateCustomer(await id_customer ,await tokenBarrier)
      expect((await response).body.status).to.equal("success")
    })

    it('sukses melakukan update new data name is updated', async()=>{
      const response = await updateCustomer(await id_customer ,await tokenBarrier)
      expect((await response).body.data.name).to.equal("Costumer baru update")
    })
    })