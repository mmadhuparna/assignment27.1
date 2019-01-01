import React, { Component } from "react";
import "./App.css";

//Class Component App having functions to increment and decrement age
class App extends Component {
  constructor() {
    super();
    this.state = {
      age: "20"
    };
    this.incrementAge = this.incrementAge.bind(this);
    this.decrementAge = this.decrementAge.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  //This is required as we are binding the input field value to state of the component
  onChange() {}

  //Increment the age when MakemeOlder button is clicked
  incrementAge() {
    const tempAge = parseInt(this.state.age, 10) + 1;
    this.setState({ age: tempAge });
  }

  //Decrement the age when MakemeYounger button is clicked
  decrementAge() {
    const tempAge = parseInt(this.state.age, 10) - 1;
    this.setState({ age: tempAge });
  }

  render() {
    return (
      <div>
        <h1>Hi, This is a React App displaying Age</h1>
        <input
          type="text"
          name="age"
          placeholder="Enter age"
          value={this.state.age}
          onChange={this.onChange}
        />
        <br />
        <button className="btn-primary" onClick={() => this.incrementAge()}>
          MakemeOlder
        </button>
        <button className="btn-success" onClick={() => this.decrementAge()}>
          MakemeYounger
        </button>
      </div>
    );
  }
}

export default App;
