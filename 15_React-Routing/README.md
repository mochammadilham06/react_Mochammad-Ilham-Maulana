# React Routing

### Resume React Routing

### 1. Routes

> Router merupakan modul dalam react yang berfungsi untuk melakukan proses navigasi pada SPA (Single Page Application)

- #### SPA VS MPA

1. SPA merupakan aplikasi yang terdiri dari 1 halaman yang menangani semua aktivitas yang terjadi dalam aplikasi tersebut

2. MPA merupakan jenis aplikasi dimana perlu untuk memuat ulang seluruh halaman website ketika ada request

- #### Istilah pada React Routing

1. `<BrowserRouter></BrowserRouter>` digunakan sebagai router yang menggunakan API history dari HTML 5, sehingga dapat menggunakan location untuk sinkronisasi UI dengan URL, dimana object location sendiri merepresentasikan dimana lokasi sekarang.
2. `<Route/>` digunakan untuk pengarah jalannya lalu lintas dalam sebuah website
3. attribute `Path=""` digunakan sebagai url pada browser saat proses routing
4. attribute `component={}` merupakan kompenen yang akan ditampilkan pada user ketika path diakses
5. `<Switch><Switch/>` digunakan untuk membungkus kumpulan beberapa component `<Router/>`
6. `exact` bertugas untuk memastikan route hanya merender `component={}` yang memiliki `path=""` yang cocok, jika tidak cocok maka akan merender `component={NotFound}`
7. `<link to="./profile"></link>` digunakan untuk antar halaman ke properti `to`

### 2. Url Params

> Url Params merupakan parameter yang nilainya ditetapkan secara dinamis di URL halaman

```jsx
<Route exact path="/movie/:id" component={MovieDetailContainer} />
```

### 3. Hook Routing

1. useHistory

   useHistory memberi kita akses ke instance riwayat yang dapat anda gunakan untuk bernavigasi contohnya `length`,`go`,`length`,`goBack`,
   `goForward`,`Push`

2. useLocation

   useLocation digunakan untuk mengembalikan object lokasi yang mewakili lokasi url saat ini

3. useParams

   useParams digunakan untuk mengembalikan object pasangan **kunci/nilai parameter** URL

4. useRouteMatch

   useRouteMatch digunakan untuk mencoba mencocokan URL saat ini dengan cara yang sama seperti `<Route/>`

```js
//example
import { useHistory } from "react-router-dom";
function MovieDetail() {
  const history = useHistory();
  const count = history.length;
  return (
    <div>
      <h1>{count + 1}</h1>
    </div>
  );
}

export default MovieDetail;
```

## Result Praktikum React Routing

![Result](./Screenshots/Result.gif)
