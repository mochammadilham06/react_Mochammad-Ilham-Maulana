# React Hooks

### Resume React Hooks

### 1. Introduction React Hook

> Hooks merupakan fitur baru react 16.8, dengan memanfaatkan React Hooks kita mampu menggunakan sebuah state tanpa harus menulis pada sebuah `class`

#### Aturan Penggunaan Hooks

1. **Hanya Panggil Hooks di tingkat atas**
2. **Hanya Panggil Hooks pada fungsi react**

### 2. Cara menggunakan useState dan useEffect

#### 1. **useState**

```jsx
//Deklarasi Variable baru
import {useState} from `react`
function Example(){
const [count, setCount] = useState(initialValue);
return (
      <div>
        <p>Value is {count}</p>
        <button onClick={()=>setCount(initialValue+1)}>Count</button>
      </div>
    );
};
```

### Contoh Deklarasi useState

```jsx
const [age, setAge] = useState(21);
const [fruit, setFruit] = useState("Watermelon");
const [todos, setTodos] = useState([{ text: "Learn React Hooks" }]);
```

#### 2. **useEffect**

useEffect memungkinkan kita melakukan efek samping didalam sebuah function component, useEffect juga hampir mirip dengan Life Cycle di Class Component

```jsx
//useEffect tanpa pembersihan
import {useState, useEffect} from `react`
function Example(){
const [count, setCount] = useState(initialValue);

useEffect(()=>{
document.title = `Value is {count}`;
})
return (
      <div>
        <p>Value is {count}</p>
        <button onClick={()=>setCount(initialValue+1)}>Count</button>
      </div>
    );
};
```

```jsx
//useEffect dengan pembersihan
import {useState, useEffect} from `react`
function FriendStatus(props){
const [isOnline, setIsOnline] = useState(null);

useEffect(()=>{
function handleStatus(status){
setIsOnline(status.isOnline);
}
ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);

return function cleanUp(){
ChatAPI.unsubscribeToFriendStatus(props.friend.id, handleStatusChange);
};
});

if(isOnline === null){
return `Loading ....`
}

return isOnline? 'Online' : 'Offline'
}
```

### 3. Custom Hooks

> Custom hook memungkinkan kita untuk mengekstrak komponen logika ke fungsi yang dapat digunakan lagi

```jsx
import {useState, useEffect} from `react`

const useWindowsWidth= ()=>{
const [isScreenSmall, setIsScreenSmall] = setState(false);

let checkScreenSize = () =>{
setIsScreenSmall(window.innerWidth<768);
};

useEffect(()=>{
checkScreenSize();
window.addEventListener("resize", checkScreenSize);
}, []);

return isScreenSmall;
};

export default useWindowsWidth
```

#### Cara memanggil

```jsx
import React from 'react'
import useWindowsWidth from ./useWindowsWidth.js

const myComponent = () => {
const onSmallScreem = useWindowsWidth();

return(
<div className= {`${onSmallScreen ? "small" : "large"}`}>
<h1>Hello World!</h1>
</div>
)
}
```
