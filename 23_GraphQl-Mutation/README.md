# Query and Apollo Client

### Resume GraphQL Mutation

### 1. Mutation?

> Mutation merupakan basic dari fungsi untuk `update`, `insert`, dan `delete` sebuah data. Sebelum melakukan fungsi tersebut, kita haru mendefinisikan operasi apa yang kita inginkan dilakukan, serta definisikan juga apa yang akan di `return` pada saat proses pengolahan data GraphQL.

### 2. How to Use?

Hampir sama dengan penggunaan query, pada Mutation kita bisa melakukan operasi dengan mendefinisikan model yang akan dibuat di GraphQL, Contoh :

```graphql
query oneToOne {
  result: kampus_merdeka_keterangan_aggregate(limit: 3) {
    data: nodes {
      id_anggota
      anggota: anggotum {
        nama
      }
    }
  }
}
```

### 3. How to Setup in React Project?

1. Import fungsi useMutation dari `@apollo/client`
2. Gunakan model mutation yang telah dibuat di GraphQL
3. Implement to Coding
