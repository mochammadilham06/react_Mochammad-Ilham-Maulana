# Event Handling

### Resume Event Handling

### State

> Pada React `state` merupakan data private sebuah komponen. Data ini hanya tersedia untuk komponen tersebut saja dan tidak dapat diakses dari komponen lain. Contoh penggunaan state sebagai berikut

```jsx
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <div>
        <h1> Hello World </h1>
        <h2> It is {this.state.date.toLocaleTimeString()}. </h2>
      </div>
    );
  }
}
```

### Statefull vs Stateless Component

1. Statefull Component adalah komponen yang memiliki state, komponen ini dibuat dengan `Class`.
2. Stateless Component adalah komponen yang tidak memiliki state, biasanya hanya menggunakan props, umumnya digunakan menggunakan `function`

### Event Handling

> Event Handling merupakan metode untuk menangani sebuah event/aksi yang diberikan pengguna kepada suatu komponent.

```js
<button onClick={this.ActiveButton}>Active This Button</button>
```
