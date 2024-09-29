import request from "supertest";
import { assert, expect } from "chai";
import { updateCategories } from "../../function/Categories/updateCategories.spec.js"
// import { getToken } from "../../function/getToken.spec.js";
import { tokenBarrier } from "../../data/config.js"
import { id_category } from "../../data/parameter.js" 


describe("Update category", () => {  
    it('sukses melakukan update category', async()=>{
       const response = await updateCategories(await id_category ,await tokenBarrier)
       // assertion memakai chai
       expect((await response).body)
       console.log((await response).body.data)
    })

    it('sukses melakukan update status is 200', async()=>{
      const response = await updateCategories(await id_category ,await tokenBarrier)
      // assertion memakai chai
      expect((await response).status).to.equal(200)
    })

   it('sukses melakukan update status is "success"', async()=>{
      const response = await updateCategories(await id_category ,await tokenBarrier)
      expect((await response).body.status).to.equal("success")
    })

    it('sukses melakukan update new data name is updated', async()=>{
      const response = await updateCategories(await id_category ,await tokenBarrier)
      expect((await response).body.data.name).to.equal("Testing Category update")
    })
    })