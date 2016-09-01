import React, { Component } from 'react';

export default class TodoForm extends Component {
  constructor() {
    super();

    this.state = {
      todo: ''
    }

    this._onInputChange = this._onInputChange.bind(this);
    this._onSubmit = this._onSubmit.bind(this);
  }

  _onInputChange(e) {
    let todo = e.target.value;
    this.setState({ todo });
  }

  _onSubmit(e) {
    e.preventDefault();
    let { todo } = this.state;
    this.props.createTodo(todo);
    this.setState({
      todo: ''
    })
  }

  render() {
    let { todo } = this.state;

    return (
      <form onSubmit={this._onSubmit} className="form-group">
        <h3>Add Todo</h3>
        <input type="text" value={todo} onChange={this._onInputChange} className="form-control"/>
        <button className="btn btn-success">Add</button>
      </form>
    )
  }
}
