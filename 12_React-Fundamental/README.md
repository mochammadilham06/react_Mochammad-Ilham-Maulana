# React Fundamental

### Apa itu JSX?

> JSX merupakan singkatan dari Javascript XML. JSX juga merupakan sebuah ekstensi

- JSX vs React.createElement?

```js
//untuk JSX
<MyButton color="blue" shadowSize={2}>
Klik Saya
<MyButton/>
```

```js
//untuk React.createElement
React.createElement(
MyButton,
{color:'blue', shadowSize:2},
Klik Saya
)
```

### React Component

> React Component merupakan bagian kode yang dapat digunakan kembali yang digunakan untuk menentukan tampilan, behavior, dan state sebagian UI

### Component Composition & Props

1. Props merupakan singkatan dari Properties yang dapat membuat sebuah kompenen menjadi lebih dinamis dan mampu memberikan argumen atau data pada sebuah komponen. Props juga bersifat readonly
2. Komposisi Komponen pada react dibagi menjadi 2, yaitu `Kontainmen` dan `Spesialisasi`

### React Lifecycle

1. Mounting

Pada mounting disini merupakan render pertama kali dilakukan atau ketika sebuah komponen dijalankan

2. Updating

Pada Updating disini dijalankan ketika ada perubahan dalam sebuah props atau komponen

3. Unmounting

Unmounting dilakukan ketika sebuah komponen diberhentikan
