API Automation
Repository ini di buat untuk memenuhi tugas pekanan 3 yaitu melakukan API automation testing pada API kontrak Kasir aja, 
testing ini menggunakan npm supertest, assertion chai, dan testing manajemen mocha.

Langkah running test 
1. Set baseUrl pada file data/config.js
  ![image](https://github.com/user-attachments/assets/c09c99b4-3578-4efd-83ae-00aca0b3c116)
2. Set bearirToken pada file data/config.js
   ![image](https://github.com/user-attachments/assets/404cf505-6840-49f4-a217-b71a126ced7a)
   Get accessToken run file function/getToken.spec.js
   
   run perintah : npx mocha module\test\specs\getToken.module.js
   ![image](https://github.com/user-attachments/assets/56b5a430-69e5-4499-9c7c-81e80251d2f8)
4. Run file suites untuk 4 endpoint Customer, categories, Product, dan transaction.

   run perintah : npx mocha --reporter mochawesome module\test\suites\nama_file.suite.js

   Report testing endtoend Customer :
   
   <img width="600" alt="2024-09-30_000855" src="https://github.com/user-attachments/assets/a6071a8f-a93e-406e-b704-0000e8c0f895">
   <img width="600" alt="2024-09-30_000920" src="https://github.com/user-attachments/assets/06ae49be-9a90-4e2e-98a9-ef5576eef8f4">
   <img width="600" alt="2024-09-30_000937" src="https://github.com/user-attachments/assets/8132667f-9ca5-42b0-80b5-a8ababb17193">

    Report testing endtoend Categories :

   <img width="600" alt="2024-09-30_001410" src="https://github.com/user-attachments/assets/9e20f221-2f15-413f-9673-feb14ec4ad8a">
   <img width="600" alt="2024-09-30_001418" src="https://github.com/user-attachments/assets/c4198bed-22f9-49f7-b2e0-18e155c8b9e7">
   <img width="600" alt="2024-09-30_001424" src="https://github.com/user-attachments/assets/75485986-49bc-4c1e-89a1-ce34665c5445">
	
   Report testing endtoend Product :
   
   <img width="600" alt="2024-09-30_001841" src="https://github.com/user-attachments/assets/121dfe9c-d1ce-4056-9c3c-b06cca696330">
   <img width="600" alt="2024-09-30_001853" src="https://github.com/user-attachments/assets/74d0be0d-f722-4f69-854a-bed49a0021ce">
   <img width="600" alt="2024-09-30_001900" src="https://github.com/user-attachments/assets/920208bb-fdf8-4463-977e-e23b159170ab">
   <img width="600" alt="2024-09-30_001905" src="https://github.com/user-attachments/assets/41482602-ff4a-4d9d-898f-8c53c1afd2a4">

   Report testing endtoend Transaction :
   
   <img width="600" alt="2024-09-30_002044" src="https://github.com/user-attachments/assets/01a0f35e-9821-4e80-a9c9-fb5b67f0453f">
   <img width="600" alt="2024-09-30_002050" src="https://github.com/user-attachments/assets/c1ced887-38da-469c-8347-cca89fd75687">
   <img width="600" alt="2024-09-30_002055" src="https://github.com/user-attachments/assets/e078b4bf-f9dd-4e3a-87b2-9177b2ab3d83">
   <img width="600" alt="2024-09-30_002101" src="https://github.com/user-attachments/assets/9710a417-a444-4364-bfc9-10fab571e2c1">
   


  
   

   







