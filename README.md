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
   







