# React Form

### Resume React For

### 1. Basic Form

> Form merupakan salah satu hal krusial dalam pengembangan sebuah website. Form sendiri dapat digunakan untuk menghandle inputan dari user.

#### Daftar Contoh Element Input

```html
//elemen input
<input/>

//element text area
<textarea></textarea>

//element select
<select>
<option>1</option>
<option>2</option>
<option>3</option>
</select

// type element input (radio button)
<input type="radio" name="1" value "1"/>1
<input type="radio" name="2" value "2"/>2

// type element input (checkbox)
<input type="checkbox" name="1" value "1"/>1
<input type="checkbox" name="2" value "2"/>2
```

### 2. Controlled Component

> Controlled Component merupakan sebuah component yang mampu mengontrol nilai inputan dari user dengan state

### 3. Uncontrolled Component

> Uncontrolled Component merupakan alternatif lain dari Controlled Component dimana data form akan ditangani langsung oleh DOM-nya sendiri. Untuk membuat Uncontrolled Component alih-alih untuk menulis event handler untuk setiap pembaruan state, kita dapat menggunakan `useRef` untuk mencapai nilai form dari DOM.

#### **Example!**

```jsx
import React, {useRef} from 'react'

export default function newName(){
const INPUT= useRef(null);

const handleSubmit = (e) => {
alert(`Name is ${input.current.value}`);
e.preventDefault();
}

return(
<form onSubmit = {handleSubmit}>
<label>
Name :
<input type"text" ref={INPUT}/>
</label>
<input type"submit" value="Kirim"/>
</form>
)
}
```

#### **Default Value on Uncontrolled Component**

```js
<input defaultValue = "ilham" type "text" ref{INPUT} />
```

#### **Tag File Input**

```js
import React, {useRef} from 'react'

export default function newName(){
const FILE_HANDLE= useRef(null);

const handleSubmit = (e) => {
e.preventDefault();
alert(`Selected file - ${FILE_HANDLE.current.files[0].name}`);
}

return(
<form onSubmit = {handleSubmit}>
<label>
Upload File
<input type"file" ref={INPUT}/>
</label>
<br/>
<button type="submit" >Submit</button
</form>
)
}
```

#### **Props dari tiap Controlled Component**

| Element                  | Value Property       | Change Callback | New Value in Call Back |
| ------------------------ | -------------------- | --------------- | ---------------------- |
| <input type="text"/>     | value="string"       | onChange        | event.target.value     |
| <input type="checkbox"/> | checked={boolean}    | onChange        | event.target.checked   |
| <input type="radio"/>    | checked={boolean}    | onChange        | event.target.checked   |
| <textarea></textarea>    | value="string"       | onChange        | event.target.value     |
| <select></select>        | value="option value" | onChange        | event.target.value     |

### 4. Basic Validation

1.  Client-Side Validation

    Validasi yang dilakukan pada sisi klien(browser). Validasi ini dilakukan agar data input sesuai dengan kebutuhan form, sebelum data form dikirim ke server.

2.  Server-side Validation

    Validasi yang dilakukan pada sisi server. Sisi server bertugas untuk memvalidasi data kembali sebelum disimpan di database. Apabila ditemukan kesalahan maka response akan dikirim kembali kepada pengguna.

#### **Example dengan HTLM**

```jsx
//Contoh Required Validation
<input
required
type"text"
ref={INPUT} onChange{handleInput}/>

//Contoh min dan max length
<input
minlength = "8"
maxlength = "12"
type"text"
ref={INPUT} onChange{handleInput}/>

//Contoh min dan max (khusus number)
<input
min = "8"
max = "12"
type"text"
ref={INPUT} onChange{handleInput}/>

// Contoh Pattern
<input
pattern = "^(buah \w*)"
type"text"
ref={INPUT} onChange{handleInput}/>
```

### **Hasil Praktikum**

1. Gambar Awal
   ![Default](./Screenshots/01_Tampilan%20Awal.png)

2. Gambar Format Error
   ![Minion](./Screenshots/02_Error%20Format.png)

3. Gambar Format Required
   ![Minion](./Screenshots/03_Required%20Form.png)

4. Gambar Form Tidak sesuai
   ![Minion](./Screenshots/04_Form%20Tidak%20Sesuai.png)

5. Gambar Form Sukses
   ![Minion](./Screenshots/05_Form%20Sukses.png)
