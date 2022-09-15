# Clean Code

### Resume Clean Code

> Clean Code merupakan istilah untuk code yang mudah dibaca, difahami, dan diubah oleh programmer.

#### 1. Karakteristik Pada Clean code

- Mudah dipahami
- Mudah dieja dan dicari
- Singkat tapi mampu mendeskripsikan konteks
- Konsisten
- Hindari penambahan konteks yang tidak perlu
- Hindari Komentar berlebihan
- Pada function usahakan membuat initial value pada tiap parameternya
- Style Guide (Berdasarkan airbnb atau google)
- Formating (Gunakan Prettier atau formater)

#### 2. Clean Code Principle

- `KISS`(_Keep it so simple_) dimana kita harus menghindari membuat fungsi yang melakukan perubahan lebih dari 1 hal. Berikut tips-tips untuk membuat KISS yaitu :
  - Fungsi atau Class harus kecil
  - Fungsi yang dibuat harus melakukan satu tugas saja
  - Jangan menggunakan terlalu banyak argument dalam satu fungsi
  - Harus diperhatikan untuk mendapat kondisi yang seimbang, kecil dan jumlahnya minimal
- `DRY`(_Dont Repeat Yourself_) yaitu dimana kita harus menghindari duplikasi code, maka buatlah fungsi yang dapat digunakan secara berulang

#### 3. Refactoring

Refactoring merupakan proses restrukturisasi code yang dibuat dengan cara mengubah struktur internal tanpa mengubah strukrur eksternal. Prinsip `KISS` dan `DRY` dapat dicapai jika dilakukan refactoring. Teknik dari refactoring adalah sebagai berikut :

- Membuat sebuah abstraksi
- Memecah code dengan fungsi atau class
- Perbaiki penamaan dan lokasi code
- Deteksi code yang memiliki duplikasi
