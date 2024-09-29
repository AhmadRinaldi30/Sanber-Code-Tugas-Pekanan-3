import request from "supertest";
import { expect } from "chai";
import { getTransactionAll } from "../../function/Transaction/getTransaction.spec.js"
import { getTransactionId } from "../../function/Transaction/getTransaction.spec.js"
// import { getToken } from "../../function/getToken.spec.js";
import { tokenBarrier } from "../../data/config.js"
import { id_category, id_product, id_purchases } from "../../data/parameter.js"

// describe create transaction
describe("Tampil transaction all", () => {
it('sukses menampilkan data product', async()=>{
   const response = await getTransactionAll(await tokenBarrier)
   // assertion memakai chai
   expect((await response).body)
   console.log((await response).body.data)
})

it('sukses menampilkan status "success"', async()=>{
   const response = await getTransactionAll(await tokenBarrier)
   // assertion memakai chai

   expect((await response).body.status).to.equal("success");
})
})

it('sukses menampilkan status code is 200', async()=>{
   const response = await getTransactionAll(await tokenBarrier)
   // assertion memakai chai
   expect((await response).status).to.equal(200);
})


// get transaction by id
describe("Tampil transaction by Id", () => {
   it('sukses menampilkan data transaction by Id', async()=>{
      const response = await getTransactionId(await id_purchases, await tokenBarrier)
      // assertion memakai chai
      expect((await response).body)
      console.log((await response).body.data)
   })

   it('sukses menampilkan status "success"', async()=>{
      const response = await getTransactionId(await id_purchases, await tokenBarrier)
      // assertion memakai chai
      expect((await response).body.status).to.equal("success")
   })

   it('sukses menampilkan status code is 200 transaction by Id', async()=>{
      const response = await getTransactionId(await id_purchases, await tokenBarrier)
      // assertion memakai chai
      expect((await response).status).to.equal(200);
   })
})
