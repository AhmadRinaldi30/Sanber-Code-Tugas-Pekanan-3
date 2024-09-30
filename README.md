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
3. Run file suites untuk 4 endpoint Customer, categories, Product, dan transaction
<img width="782" alt="2024-09-30_000937" src="https://github.com/user-attachments/assets/8132667f-9ca5-42b0-80b5-a8ababb17193">
<img width="781" alt="2024-09-30_000920" src="https://github.com/user-attachments/assets/06ae49be-9a90-4e2e-98a9-ef5576eef8f4">
<img width="779" alt="2024-09-30_000855" src="https://github.com/user-attachments/assets/a6071a8f-a93e-406e-b704-0000e8c0f895">

   







