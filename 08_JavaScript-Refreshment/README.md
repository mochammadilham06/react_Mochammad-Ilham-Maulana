# Javascript Refreshment

## Pengumpulan Resume Javascript Refreshment

> `JavaScript` merupakan bahasa pemrograman yang high-level, scripting, untyped, dan juga interpreted.

### 1. _Values_

Dalam materi ini terdapat 3 poin utama yaitu `Declaration`, `Scooping` dan `Hoisting`

- `Declaration` merupakan sebuah proses pembuatan variabel untuk menyimpan sebuah data. Pada declaration terdapat 3 cara deklarasi yaitu ada `var`, `let`, dan `const`.
- `Scooping` merupakan cara bagaimana menentukan sebuah variabel, fungsi, dan objek dapat diatur dan diakses dalam `code`. Pada Scooping terpadat 3 kategori yang pertama ada `global`, `function`, serta `block`
- `Hoisting` merupakan cara membuat beberapa jenis data atau fungsi yang dapat digunakan sebelum di deklarasikan. Pada kasusnya biasanya untuk hoisting menggunakan `var`.

### 2. _Understanding Variable_

Dalam kategori ini terdapat 2 kategori tipe data yaitu **primitive** dan **object** .

- `Primitif` merupakan unit pemrosesan terkecil dan elemen paling sederhana dalam sebuah bahasa pemrograman. Contoh dari tipe data primitif adalah sebagai berikut :
  - `string`
  - `boolean`
  - `number`
  - `undefined`
  - `null`
  - `symbol`
  - `BigInt` pada ES11.

###### **Note!!**

Semua tipe data primitif memiliki aturan dapat meneruskan nilai. Contoh :

```js
const one = 1;
const oneCopy = one;

console.log(one === oneCopy); //true
console.log(oneCopy === 1); //true
console.log(one === one); // true
```

- `Object` merupakan unit yang menyimpan property dan fungsi (_method_).Contohnya adalah :
  - `Function`
  - `Object`
  - `Array`
  - `Date`
  - `Set`
  - `Map`
  - `Weak Set`
  - `Weak Map`

###### **Note!!**

Pada tipe data object dikenal dengan istilah refence yaitu setiap object akan memberikan reference data yang sama pada object yang lain. Contoh

```js
const array1 = [1];
const array2 = [1];

console.log(array1 === array2); //false
console.log(array1 === [1]); //false

const array3 = array1;

console.log(array3 === array1); //true
console.log(array1 === array3); //true
```

### 3. _Destructuring_

`Destructuring` merupakan sebuah metode untuk memecah komponen yang kompleks menjadi komponen yang lebih kecil. Contoh :

```js
const array1 = [1, 2, 3];

const [a, b] = array1;
console.log(a);
console.log(b);
```

`Spread` digunakan ketika semua element atau array perlu dimasukan kedalam sebuah daftar.

```js
const a = {
  key1: 1,
  key2: 2,
};

const b = { ...a };
console.log(b); //output { key1: 1, key2: 2 }
```

### 4. _Method_

Pada method terdapat 6 jenis yaitu :

- `Concat`
- `Map`
- `Foreach`
- `Slice`
- `Filter`
- `Reduce`

### 5. _Control Flow_

`Control Flow` merupakan metode cara mengatur alur eksekusi pada statement.

1. Pengulangan

- `for`
- `while`
- `do while`

2. Pengkondisian

- `if`
- `if else`
- `switch`
- `block`
- `try ..catch`
- `break`
- `continue`
- `throw`

### 6. _Function_

`function` dalam javascript merupakan sebuah object yang berguna untuk melakukan komputasi yang dapat digunakan berulang kali.

- `Function`
- `Function Expression`
- `Arrow Fuction`

```js
const name = (firstName, lastName) => {
  console.log(`${firstName} ${lastName}`);
};
name("ilham", "maulana");

//contoh lain
let hewan = ["kucing", "anjing", "adis"];
let jumlahHuruf = hewan.map((name) => name.length);

console.log(jumlahHuruf);
```

### 7. _Class_

`class` merupakan sebuah template atau blueprint untuk membuat object.

- `Class`

```js
class People {
  constructor(name, age) {
    //this is attribute
    this.name = name;
    this.age = age;
  }
  greetings() {
    //this is method
    return `Saya ${this.name}, umur ${this.age} tahun`;
  }
}

const iam = new People("ilham", 21);
console.log(iam.greetings());
```

### 8. Async Wait

1. `Syncronous` merupakan cara mengeksekusi setiap perintah sesuai urutannya.

```js
console.log("Mulai");
console.log("Proses");
console.log("Berakhir");
```

2. `Asyncronous` merupakan cara eksekusi berdasarkan waktu dan proses.

```js
console.log("Mulai");
setTimeout(() => {
  console.log("Proses....", 1000);
});
console.log("Berakhir");
```

### 9. DOM

`DOM` (Document Object Model) merupakan sebuah API untuk HTML yang merepresentasikan halaman web pada suatu document menjadi sebuah object. Pada DOM terbagi 3 kategori yang pertama **DOM Selection Method**, **this**, **this**.

- `DOM Selection Method`

| Event                   | Kegunaan        |
| ----------------------- | --------------- |
| getElementById()        | Element         |
| getElementByTagName()   | HTML Collection |
| getElementByClassName() | HTML Collection |
| querySelector()         | Element         |
| querySelectorAll()      | nodeList        |

- `DOM Manipulation`

| Event                       | Kegunaan                                    |
| --------------------------- | ------------------------------------------- |
| element.innerHTML           | Merubah isi dari tag yang telah diseleksi   |
| element.style.<propertyCSS> | Merubah isi style yang telah diseleksi      |
| elememt.setAttribute()      | Untuk memanipulasi attribute yang diseleksi |
| element.classList.add()     | Untuk memanipulasi Class yang diseleksi     |

- `DOM Event`

| Event       | Kegunaan                                               |
| ----------- | ------------------------------------------------------ |
| onclick     | Digunakan ketika user meng-klik mouse                  |
| onchange    | Digunakan dalam kombinasi dengan validasi bidang input |
| onblur      | Digunakan ketika meninggalkan kolom input              |
| onmouseover | Digunakan ketika cursor berada diatas object           |
| onmouseout  | Digunakan ketika cursor berada keluar dari object      |
| oncopy      | Digunakan ketika user menyalin suatu object            |

## Hasil Screen Shot Praktikum

1. Soal Nomor 1
   ![Task Number 1](./Screenshot/Soal%201.png)

2. Soal Nomor 2
   ![Task Number 2](./Screenshot/Soal%202.png)

3. Soal Nomor 3
   ![Task Number 3](./Screenshot/Soal%203.png)

4. Soal Nomor 4
   ![Task Number 4](./Screenshot/Soal%204.png)

5. Soal Nomor 5
   ![Task Number 5](./Screenshot/Soal%205.png)

6. Soal Nomor 6
   ![Task Number 6](./Screenshot/Soal%206.png)
