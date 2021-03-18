import "./App.css";
import React, { Component } from "react";
import { Body, Body2 } from "./components/Body";
import Header from "./components/Header";
import Counter from "./components/Counter"

class App extends Component {
  add(a, b) {
    return a + b;
  }

  render() {
    return (
      <div className="App">
        <Header
          title="Hello from App"
          num={10}
          myObj={{
            a: 5,
            b: 12,
          }}
          myArr={[1, 3, 5, 7, 9]}
          myFunc={this.add}
        />
        <Body2 />
        <Body myFunc={this.add} text="I am cool" text2="I love myself" />
        <Counter initialCount={0}/>
        <Counter initialCount={10}/>
      </div>
    );
  }
}

export default App;
