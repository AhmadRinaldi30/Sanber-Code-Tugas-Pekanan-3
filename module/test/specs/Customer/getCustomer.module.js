import request from "supertest";
import { expect } from "chai";
import { getAllCustomer} from "../../function/Customer/getCustomer.spec.js"
import { getCustomerId} from "../../function/Customer/getCustomer.spec.js"
// import { getToken } from "../../function/getToken.spec.js";
import { tokenBarrier } from "../../data/config.js"
import { id_customer } from "../../data/parameter.js"

// describe get customer
describe("Tampil costumer all", () => {
it('sukses menampilkan data customer', async()=>{
   const response = await getAllCustomer(await tokenBarrier)
   // assertion memakai chai
   expect((await response).body)
   console.log((await response).body.data)
})

it('sukses menampilkan status "success"', async()=>{
   const response = await getAllCustomer(await tokenBarrier)
   // assertion memakai chai

   expect((await response).body.status).to.equal("success");
})
})

it('sukses menampilkan status code is 200', async()=>{
   const response = await getAllCustomer(await tokenBarrier)
   // assertion memakai chai
   expect((await response).status).to.equal(200);
})


// get customer by id
describe("Tampil costumer by Id", () => {
   let getid;
   it('sukses menampilkan data customer by id', async()=>{
      const response = await getCustomerId(await id_customer,await tokenBarrier)
      // assertion memakai chai
      expect((await response).body)
      console.log((await response).body.data)
   })

   it('sukses menampilkan status "success"', async()=>{
      const response = await getCustomerId(await id_customer,await tokenBarrier)
      // assertion memakai chai
      expect((await response).body.status).to.equal("success")
   })

   it('sukses menampilkan status code is 200 by id', async()=>{
      const response = await getCustomerId(await id_customer,await tokenBarrier)
      // assertion memakai chai
      expect((await response).status).to.equal(200);
   })
})
