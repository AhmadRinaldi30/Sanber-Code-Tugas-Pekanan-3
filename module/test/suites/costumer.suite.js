import request from "supertest";
import { expect } from "chai";
import { addCustomer } from "../../function/Customer/createCustomer.spec.js";
import { updateCustomer } from "../../function/Customer/updateCustomer.spec.js"
// import { getToken } from "../../function/getToken.spec.js";
import { tokenBarrier } from "../../data/config.js";
import { getAllCustomer} from "../../function/Customer/getCustomer.spec.js";
import { getCustomerId} from "../../function/Customer/getCustomer.spec.js";
import { id_customer } from "../../data/parameter.js";
import { deleteCustomer } from "../../function/Customer/deleteCustomer.spec.js"

const id_customer_delete = "674475ec-d882-49c5-aeee-af0d2d14a189";
// describe End to End - CRUD Customer
describe("End to End - CRUD Custumer", () => {
    // add Customers
    it('sukses melakukan tambah customer', async()=>{
       const response = await addCustomer(await tokenBarrier);
       // assertion memakai chai
       expect((await response).body);
    });
    it('status tambah success', async()=>{
        const response = await addCustomer(await tokenBarrier);
        // assertion memakai chai
        expect((await response).status).to.equal("success")
     });
     it('message success tambah data "Customer berhasil ditambahkan"', async()=>{
        const response = await addCustomer(await tokenBarrier);
        // assertion memakai chai
        expect((await response).message).to.equal("Customer berhasil ditambahkan");
        console.log((await response))
     });

     // Get Customer all
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

     it('sukses menampilkan status code is 200', async()=>{
        const response = await getAllCustomer(await tokenBarrier)
        // assertion memakai chai
        expect((await response).status).to.equal(200);
     })

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

     // Update Customers
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

     // Delete Customers
     it('sukses melakukan delete data', async() =>{
        const response = await deleteCustomer(await id_customer_delete, await tokenBarrier)
        // assertion memakai chai
        expect((await response).body)
        console.log((await response).body.data)
     })
 
     it('sukses melakukan delete data status is success', async()=>{
         const response = await deleteCustomer(await id_customer_delete, await tokenBarrier)
         // assertion memakai chai
         expect((await response).body.status).to.equal("success");
      })
 
      it('sukses melakukan delete data status code is 200', async()=>{
         const response = await deleteCustomer(await id_customer_delete, await tokenBarrier)
         // assertion memakai chai
         expect((await response).status).to.equal(200);
      })
    });

    