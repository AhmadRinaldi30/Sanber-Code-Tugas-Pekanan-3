import request from "supertest";
import { expect } from "chai";
import { createProduct } from "../../function/Product/createProduct.spec.js";
// import { getToken } from "../../function/getToken.spec.js";
import { tokenBarrier } from "../../data/config.js";
import { getProductAll} from "../../function/Product/getProduct.spec.js";
import { getProductParams} from "../../function/Product/getProduct.spec.js";
import { id_category, id_product } from "../../data/parameter.js";
import { updateProduct } from "../../function/Product/updateProduct.spec.js";
import { id_product } from "../../data/parameter.js";
import { deleteProduct } from "../../function/Product/deleteProduct.spec.js"
// import { id_customer } from "../../data/parameter.js";

const id_product_delete = "7868bd3e-3f9b-414e-9bef-53035d5837a4";
const p = 1;
const nm_product = "Testing Produk NEW";

// describe End to End - CRUD Product
describe("End to End - CRUD Product", () => {
    it('sukses melakukan tambah product', async()=>{
       const response = await createProduct(await tokenBarrier);
       // assertion memakai chai
       expect((await response).body);
       console.log((await response).body)
    });
    
    it('status tambah success', async()=>{
        const response = await createProduct(await tokenBarrier);
        // assertion memakai chai
        expect((await response).body.status).to.equal("success")
     });
    
    
     it('message success tambah data "Product berhasil ditambahkan"', async()=>{
        const response = await createProduct(await tokenBarrier);
        // assertion memakai chai
        expect((await response).body.message).to.equal("Product berhasil ditambahkan");
     });
    
     it('message success tambah data dengan status Code 201"', async()=>{
        const response = await createProduct(await tokenBarrier);
        // assertion memakai chai
        expect((await response).status).to.equal(201);
     });


     // Get Product all 
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

     //Get product by params
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

     // Update Product
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

     //Delete Product all
     it('sukses melakukan delete data', async() =>{
        const response = await deleteProduct(await id_product_delete, await tokenBarrier)
        // assertion memakai chai
        expect((await response).body)
        console.log((await response).body.data)
     })
 
     it('sukses melakukan delete data status is success', async()=>{
         const response = await deleteProduct(await id_product_delete, await tokenBarrier)
         // assertion memakai chai
         expect((await response).body.status).to.equal("success");
      })
 
      it('sukses melakukan delete data status code is 200', async()=>{
         const response = await deleteProduct(await id_product_delete, await tokenBarrier)
         // assertion memakai chai
         expect((await response).status).to.equal(200);
      })
    
    });