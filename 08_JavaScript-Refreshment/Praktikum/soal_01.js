let a = 5;
let b = "kampus merdeka";
const NAMA = "Budi";
let terdaftar = true; //b. Ubah kode di atas sehingga dapat menampilkan baris 22 di dalam console.
let lengkapArr = [a, b, NAMA, terdaftar];

function perkenalan() {
  let asal = "Indonesia";
  return console.log(
    "Perkenalkan nama saya " +
      NAMA +
      " nomor urut " +
      a +
      " sekarang sedang mengikuti " +
      b +
      "berasal dari " +
      asal
  );
}

if (terdaftar === true) {
  console.log(NAMA + " terdaftar sebagai kegiatan kampus merdeka");
}

a = b;
// NAMA = b; //tidak bisa dirubah variable NAMA dengan b karena NAMA konstan
console.log(`Array = ${lengkapArr[2]}`); //a. Ambila index ke 2 dalam array di baris 5 dan tampilkan dalam console
// console.log("asal diakses = " + asal); // variable asal tidak dapat diakses karena berbeda scoop
console.log("a adalah = " + a);
console.log("b adalah = " + b);
perkenalan(); // c. Lakukan Pemanggilan untuk function perkenalan pada baris 31.
