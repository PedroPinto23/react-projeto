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
    this.setState({
      input: event.target.value
    });
  }
  submitMessage = enviar => {
    enviar.preventDefault();
    if (!this.state.input.length) {
      return;
    }
    enviar = this.state.input;
    this.setState({
      input: "",
      message: this.state.message.concat(enviar)
    });
  };
  handleDelete (event) {
    let valor = [...this.state.message]
    let index = valor.indexOf(this.state.input)
    if (index !== -1){
      valor.splice(index, 1)
      this.setState ({
        message: valor
      })
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
