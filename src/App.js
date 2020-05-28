import React, { Component } from "react";
import "./styles.css";
import "./textInPut/Textinput";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: "" };
  }

  textinput = input => {
    this.setState({ input });
  };

  handleTextInput = () => {
    this.props.TextInput(this.state.input);
    this.setState({ input: "" });
  };

  render() {
    return (
      <div>
        <input className='textinput'
          onChange={e => this.textinput(e.target.value)}
          value={this.state.input}
        />
      </div>
    );
  }
}

export default App
