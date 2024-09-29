import request from "supertest";
import { expect } from "chai";
import { createCategories } from "../../function/Categories/createCategories.spec.js";
// import { getToken } from "../../function/getToken.spec.js";
import { tokenBarrier } from "../../data/config.js";
import { getCategoriesParams} from "../../function/Categories/getCategories.spec.js";
import { getCategoriesId} from "../../function/Categories/getCategories.spec.js";
import { id_category } from "../../data/parameter.js";
import { updateCategories } from "../../function/Categories/updateCategories.spec.js"
import { deleteCategories } from "../../function/Categories/deleteCategories.spec.js"

const page = 1;
const name = "Testing Category";
const id_category_delete = "a0ebb55a-f631-4dcf-9c5b-46abf6a7d41c";

// describe End to End - CRUD Categories
describe("End to End - CRUD Categories", () => {
    it('sukses melakukan tambah categories terbaru', async()=>{
       const response = await createCategories(await tokenBarrier);
       // assertion memakai chai
       expect((await response).body);
    });

    it('status tambah success', async()=>{
        const response = await createCategories(await tokenBarrier);
        // assertion memakai chai
        expect((await response).body.status).to.equal("success")
     });

     it('message success tambah data "Category berhasil ditambahkan"', async()=>{
        const response = await createCategories(await tokenBarrier);
        // assertion memakai chai
        expect((await response).body.message).to.equal("Category berhasil ditambahkan");
        console.log((await response).body)
     });
     
     it('status tambah berhasil status code is 200', async()=>{
        const response = await createCategories(await tokenBarrier);
        // assertion memakai chai
        expect((await response).status).to.equal(200)// failed expected untuk status code adalah 200
     });

     // Get Categories by params
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

    // Get category by id
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

     // update category 

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

     // delete categories 
     it('sukses melakukan delete data', async()=>{
        const response = await deleteCategories(await id_category_delete, await tokenBarrier)
        // assertion memakai chai
        expect((await response).body)
        console.log((await response).body.data)
     })
 
     it('sukses melakukan delete data status is success', async()=>{
         const response = await deleteCategories(await id_category_delete, await tokenBarrier)
         // assertion memakai chai
         expect((await response).body.status).to.equal("success");
      })
 
      it('sukses melakukan delete data status code is 200', async()=>{
         const response = await deleteCategories(await id_category_delete, await tokenBarrier)
         // assertion memakai chai
         expect((await response).status).to.equal(200);
      })

    });   
   