import logo from "../logo.svg";
import React, {Component} from "react"

export default class Header extends Component {
    render() {
      return (
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
  
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            {this.props.title}
          </a>
          <div>{this.props.num}</div>
          <div>{this.props.myObj.a}</div>
          <div>{this.props.myObj.b}</div>
          <div>{JSON.stringify(this.props.myObj)}</div>
          <div>{this.props.myArr[2]}</div>
          <div>{this.props.myFunc(13, 14)}</div>
        </header>
      );
    }
  }