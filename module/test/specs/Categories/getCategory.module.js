import request from "supertest";
import { expect } from "chai";
import { createCategories } from "../../function/Categories/createCategories.spec.js"
import { getCategoriesParams} from "../../function/Categories/getCategories.spec.js"
import { getCategoriesId} from "../../function/Categories/getCategories.spec.js"
// import { getToken } from "../../function/getToken.spec.js";
import { tokenBarrier } from "../../data/config.js"
import { id_category } from "../../data/parameter.js"


const page = 1;
const name = "Testing Category";

// describe create category
describe("Tampil categories all params", () => {
    it('sukses menampilkan data categories by params', async()=>{
       const response = await getCategoriesParams(await page,await name, await tokenBarrier)
       // assertion memakai chai
       expect((await response).body)
       console.log((await response).body.data)
    })
    
    it('sukses menampilkan status "success"', async()=>{
       const response = await getCategoriesParams(await page,await name, await tokenBarrier)
       // assertion memakai chai
    
       expect((await response).body.status).to.equal("success");
    })

    it('sukses menampilkan status code is 200', async()=>{
      const response = await getCategoriesParams(await page,await name, await tokenBarrier)
      // assertion memakai chai
      expect((await response).status).to.equal(200);
   })

   })
    
    

   //  it('message success tampil data "Testing Category"', async()=>{
   //      const response = await getCategoriesParams(await page, await name, await tokenBarrier);
   //      // assertion memakai chai
   //      expect((await response).data.categoriess.name).to.equal("Testing Category");
   //      console.log(response.body.data)
   //   });
    
    
    // get category by id
    describe("Tampil costumer by Id", () => {
       it('sukses menampilkan data customer by id', async()=>{
          const response = await getCategoriesId(await id_category, await tokenBarrier)
          // assertion memakai chai
          expect((await response).body)
          console.log((await response).body.data)
       })
    
       it('sukses menampilkan status "success"', async()=>{
          const response = await getCategoriesId(await id_category, await tokenBarrier)
          // assertion memakai chai
          expect((await response).body.status).to.equal("success")
       })
    
       it('sukses menampilkan status code is 200 by id', async()=>{
          const response = await getCategoriesId(await id_category,await tokenBarrier)
          // assertion memakai chai
          expect((await response).status).to.equal(200);
       })

   //     it('message success tampil data "Testing Category NEW"', async()=>{
   //      const response = await getCategoriesId(await id_category,await tokenBarrier);
   //      // assertion memakai chai
   //      expect((await response).data.categories.name).to.equal("Testing Category new");
   //      console.log((await response).body.data)
   //   });
    })