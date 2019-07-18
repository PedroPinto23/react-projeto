import React, { Component } from "react";
import "./App.css";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      message: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }
  handleChange(event) {
    event.preventDefault();
    this.setState({
      input: event.target.value
    });
  }
  submitMessage = enviar => {
    (this.state.input === "") ? alert("Insira um item"):
    this.setState({
      input: "",
      message: this.state.message.concat(this.state.input)
    });
  };
  handleDelete(index) {
    this.state.texto.splice(index, 1);
    this.setState(this.state);
  }
  };
  render() {
    return (
      <div className="App">
        <h1>Lista
        </h1>
        <input
          className="input"
          type="text"
          value={this.state.input}
          placeholder="Digite aqui"
          onChange={this.handleChange}
        />
        <button
          className="botao"
          value={this.state.message}
          onClick={this.submitMessage}
        >
          Inserir
        </button>
        <ul>
          {this.state.message.map(msg => (
            <li className="paper" key={msg + 1}>
              {msg}
              <button onClick={this.handleDelete()}>delete</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
