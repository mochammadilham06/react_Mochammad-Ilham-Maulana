## Problem 1 - Analysis

```js
class user{
       var id;
       var username;
       var password;
   }

   class userservice{
       user[] users = [];

       user[] getallusers(){
           return users;
       }

       user getuserbyid(userid) {
           return users.filter(userid);
       }
   }
```

Kekurangan dari kode tersebut yaitu :

1. standart dari penggunaan variabel harusnya menggunakan `let` bukan `var` karena meminimalisir terjadinnya error saat atau bug karena adanya scooping.
2. Penamaan Variabel dan juga function standarnya menggunakan camelCase.
3. Penamaan Class harus diawali dengan huruf kapital atau menggunakan PascalCase.
4. Pada class method tidak ada keyword `this`, standar dari airbnb biasanya menggunakan `this` untuk memudahkan chaining data.
