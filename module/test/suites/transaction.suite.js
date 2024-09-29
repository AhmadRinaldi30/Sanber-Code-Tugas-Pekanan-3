import request from "supertest";
import { expect } from "chai";
import { createTransaction } from "../../function/Transaction/createTransaction.spec.js";
// import { getToken } from "../../function/getToken.spec.js";
import { tokenBarrier } from "../../data/config.js";
import { getTransactionAll } from "../../function/Transaction/getTransaction.spec.js";
import { getTransactionId } from "../../function/Transaction/getTransaction.spec.js";
import { id_category, id_product, id_purchases } from "../../data/parameter.js";



// describe create Transaction
describe("Tambah transaction terbaru", () => {
    it('sukses melakukan tambah transaction', async()=>{
       const response = await createTransaction(await tokenBarrier);
       // assertion memakai chai
       expect((await response).body);
       console.log((await response).body)
    });
    
    it('status tambah success', async()=>{
        const response = await createTransaction(await tokenBarrier);
        // assertion memakai chai
        expect((await response).body.status).to.equal("success")
    });
    
    
    it('message success tambah data "Transaction berhasil ditambahkan"', async()=>{
        const response = await createTransaction(await tokenBarrier);
        // assertion memakai chai
        expect((await response).body.message).to.equal("transaksi ditambahkan");
    });
    
    it('message success tambah data dengan status Code 200"', async()=>{
        const response = await createTransaction(await tokenBarrier);
        // assertion memakai chai
        expect((await response).status).to.equal(201);
     });

     //Get transaction

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
     
     it('sukses menampilkan status code is 200', async()=>{
        const response = await getTransactionAll(await tokenBarrier)
        // assertion memakai chai
        expect((await response).status).to.equal(200);
     })

     // Get transaction by id
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
    
});