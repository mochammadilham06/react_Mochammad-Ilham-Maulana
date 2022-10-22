# GraphQL

### Resume GraphQL

### 1. Introduction of GraphQL

> GraphQL merupakan query language untuk API, dimana kita bisa mendefine schema dari data yang ingin kita kirim, dan kita mampu meminimaze jumlah field yang kita butuhkan. Dan dengan menggunakan GraphQL kita hanya menggunakan 1 end point untuk setiap methodnya.

### 2. GraphQL Core Features

1. Query, mengambil data dengan berbasis apa yang kita definisi
2. Mutation, merupakan metode untuk tambah, ubah, dan hapus
3. Subscription, metode untuk mendapatkan update secara realtime
4. REST API vs GraphQL

```json
// untuk REST API
[
  {
    "id": 1,
    "title": "Batman",
    "year": "2022",
    "director": {
      "id": 3
    }
  }
]
```

```js
//untuk GraphQL Query
{
movies{
id
title
}
}

//Result dari GraphQL
{
movies:[{
id : 1,
title : "batman",
}]
}
```

### 3. GraphQL Basic

1. #### Multiple Query GraphQL

```js
{
query {
movies {
id,
title
}

books {
id,
title
}
}
}

//RESULT
{
movies:[{
id : 1,
title : "batman",
}]
books:[{
id : 1,
title : "doraemon",
}]
}
```

2. #### Fragment
   Fragment merupakan potongan logic yang dapat di _useable_ di beberapa tempat.

```js
fragment FR_Movie on movie {
title
year
}

{
query{
movies{
...FR_Movie
director{
name
age
}
}
}
}

//RESULT
{
movies:[{
id:1,
title:"batman",
director:{
name : "Nolan",
age : 51
}
}]
}
```

3. #### Mutation
   Mutation merupakan fungsi basic untuk melakukan insert, update, dan delete

```js
mutation {
insert_film(
object:{
title: "the boy",
description : "The movies"})
{
returning{
id
}
}
}
```

4. #### Subscription
   Subscription merupakan metode update data secara realtime

```js
subscription{
person{
id
name
}
}
```
