import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';

export default class TodoApp extends Component {
  constructor() {
    super();

    this.state = {
      showModal: false,
      todoText: '',
      todoIndex: ''
    }

    this._delete = this._delete.bind(this);
    this._openModal = this._openModal.bind(this);
    this._closeModal = this._closeModal.bind(this);
    this._onInputChange = this._onInputChange.bind(this);
    this._edit = this._edit.bind(this);
    this._sort = this._sort.bind(this);
  }

  _delete(index) {
    this.props.deleteTodo(index);
  }

  _openModal(index, todo) {
    this.setState({
      showModal: true,
      todoText: todo,
      todoIndex: index
    });
  }

  _closeModal() {
    this.setState({showModal: false});
  }

  _onInputChange(e) {
    this.setState({
      todoText: e.target.value
    })
  }

  _edit(e) {
    e.preventDefault();
    this.props.editTodo(this.state.todoIndex, this.state.todoText)
    this._closeModal();
  }

  _sort(e) {
    e.preventDefault();
    this.props.sortTodos();
  }

  render() {
    let { todos } = this.props;

    // todos = todos.filter(todo => {
    //
    // })

    let Todos = todos.map((todo, index) => {
      return (
        <div key={index}>
          <li onDoubleClick={this._delete.bind(null, index)}>{todo}</li>
          <button className="btn btn-primary" onClick={this._openModal.bind(null, index, todo)}>Edit</button>
        </div>
      )
    })

    return (
      <div>
        <h3>Todo List</h3>
        <button className="btn btn-default" onClick={this._sort}>Sort A-Z</button>
        <ol>
          {Todos}
        </ol>

        <Modal show={this.state.showModal} onHide={this._closeModal}>
          <form onSubmit={this._edit}>
            <Modal.Header closeButton>
              <Modal.Title>Edit Profile</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <input type="text" value={this.state.todoText} onChange={this._onInputChange}/>
            </Modal.Body>
            <Modal.Footer>
              <Button className="btn btn-success" type="submit">Save</Button>
              <Button onClick={this._closeModal}>Close</Button>
            </Modal.Footer>
          </form>
        </Modal>
      </div>
    )
  }
}
