import request from "supertest";
import { expect } from "chai";
import { getProductAll} from "../../function/Product/getProduct.spec.js"
import { getProductParams} from "../../function/Product/getProduct.spec.js"
// import { getToken } from "../../function/getToken.spec.js";
import { tokenBarrier } from "../../data/config.js"
import { id_category, id_product } from "../../data/parameter.js"

const p = 1;
const nm_product = "Testing Produk NEW";


// describe create customer
describe("Tampil product all", () => {
it('sukses menampilkan data product', async()=>{
   const response = await getProductAll(await tokenBarrier)
   // assertion memakai chai
   expect((await response).body)
   console.log((await response).body.data)
})

it('sukses menampilkan status "success"', async()=>{
   const response = await getProductAll(await tokenBarrier)
   // assertion memakai chai

   expect((await response).body.status).to.equal("success");
})

it('sukses menampilkan status code is 200', async()=>{
   const response = await getProductAll(await tokenBarrier)
   // assertion memakai chai
   expect((await response).status).to.equal(200);
})

})



// get product by id
describe("Tampil product by Params", () => {
   it('sukses menampilkan data product Params', async()=>{
      const response = await getProductParams(await p, await nm_product, await id_product, await tokenBarrier)
      // assertion memakai chai
      expect((await response).body)
      console.log((await response).body.data.product)
   })

   it('sukses menampilkan status "success"', async()=>{
      const response = await getProductParams(await p, await nm_product, await id_product, await tokenBarrier)
      // assertion memakai chai
      expect((await response).body.status).to.equal("success")
   })

   it('sukses menampilkan status code is 200 by Params', async()=>{
      const response = await getProductParams(await p, await nm_product, await id_product, await tokenBarrier)
      // assertion memakai chai
      expect((await response).status).to.equal(200);
   })
})
