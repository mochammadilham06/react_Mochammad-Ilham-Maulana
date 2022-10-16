# Deployment

### Resume Deployment

### 1. Build React App

> Tujuan dilakukan build yaitu agar aplikasi kita menjadi versi production, sehingga performanya lebih ringan dan cepat

- #### Cara Build

```
npm run build
```

- #### Apa yang terjadi ketika di build?

1. Pada saat build React akan mengoptimisasi folder yang ada dengan harapan file-file yang ada menjadi lebih kecil ukurannya
2. React juga akan membuat folder baru yang bernama build

- #### Run Optimized App

```
//Install Serve
npm i -g serve

//Jalankan server Lokal
npm -s serve
```

### 2. Deployment

1. Apa itu Deployment

   Deployment merupakan kegiatan yang bertujuan untuk menyebarkan aplikasi yang sudah kita buat. Harapannya aplikasi tersebut dapat diakses oleh banyak orang, tidak hanya oleh kita sendiri.

### 3. Layanan untuk Deployment

1. Surge
   Surge merupakan layanan penerbit website statik gratis untuk Front End Developers. Website statik yang menggunakan surge memiliki domain `.surge.sh`. Surge dapat menerima HTML, CSS, dan JS. Cara **Deployment** dengan surge adalah sebagai berikt :

```
npm install --global surge

//Setelah terinstall
//jalankan perintah

surge //pada terminal
```

**Note : Cara Teardown Surge**

`surge teardown nama_webisite.surge.sh`

2. Netlify CLI
   Netlify adalah platform penyedia layanan build tools sekaligus _Continues Deployment_. Netlify memungkinkan kita untuk mempublish website secara gratis. Netlify juga sudah terintegrasi dengan Git Host seperti Github dan Gitlab. Cara deployment sebagai berikut :
   1. Buat akun Netlify (www.netlify.com)
   2. Install netlify CLI di Terminal dengan perintah `npm i netlify-cli -g`
   3. Jalankan perintah `netlify deploy` di terminal
   4. Verify akun melalui browser
   5. Create dan Configure a new site
   6. Pilih lokasi file yang akan di deploy. Pilih `./build`
