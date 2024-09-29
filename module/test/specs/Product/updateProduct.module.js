import request from "supertest";
import { assert, expect } from "chai";
import { updateProduct } from "../../function/Product/updateProduct.spec.js"
// import { getToken } from "../../function/getToken.spec.js";
import { tokenBarrier } from "../../data/config.js"
import { id_product } from "../../data/parameter.js" 


describe("Update product", () => {  
    it('sukses melakukan update product', async()=>{
       const response = await updateProduct(await id_product ,await tokenBarrier)
       // assertion memakai chai
       expect((await response).body)
       console.log((await response).body.data)
    })

    it('sukses melakukan update status is 200', async()=>{
      const response = await updateProduct(await id_product ,await tokenBarrier)
      // assertion memakai chai
      expect((await response).status).to.equal(200)
    })

   it('sukses melakukan update status is "success"', async()=>{
      const response = await updateProduct(await id_product ,await tokenBarrier)
      expect((await response).body.status).to.equal("success")
    })

    it('sukses melakukan update new data name product is updated', async()=>{
      const response = await updateProduct(await id_product ,await tokenBarrier)
      expect((await response).body.data.name).to.equal("Product baru update")
    })
    })