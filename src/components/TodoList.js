import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';

import FontIcon from 'material-ui/FontIcon';
import {red500, yellow500, blue500} from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';
import {List, ListItem} from 'material-ui/List';

import TodoFilter from './TodoFilter';

const iconStyles = {
  marginRight: 24,
};

export default class TodoApp extends Component {
  constructor() {
    super();

    this.state = {
      showModal: false,
      todoText: '',
      todoIndex: '',
      filterText: '',
      sorted: ''
    }

    this._delete = this._delete.bind(this);
    this._openModal = this._openModal.bind(this);
    this._closeModal = this._closeModal.bind(this);
    this._onInputChange = this._onInputChange.bind(this);
    this._edit = this._edit.bind(this);
    this._sort = this._sort.bind(this);
    this._filter = this._filter.bind(this);
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
    this.setState({sorted: true})
  }

  _filter(text) {
    this.setState({filterText: text});
  }

  render() {
    let { todos } = this.props;

    if (this.state.filterText) {
      todos = todos.filter(todo => {
        if (todo.includes(this.state.filterText)) return true;
        return false;
      })
    }

    if (this.state.sorted) {
      todos.sort();
    }

    let Todos = todos.map((todo, index) => {
      return (
        <div key={index}>
          <ListItem primaryText={todo} onDoubleClick={this._delete.bind(null, index)} />
          {/* <li onDoubleClick={this._delete.bind(null, index)}>{todo}</li> */}
          <span onClick={this._openModal.bind(null, index, todo)}><FontIcon className="material-icons" style={iconStyles}>edit</FontIcon></span>
        </div>
      )
    })

    return (
      <div>
        <h3>Todo List</h3>
        <FlatButton label="Sort A-Z" onClick={this._sort}/>
        {/* <button className="btn btn-default" onClick={this._sort}>Sort A-Z</button> */}
        <TodoFilter todos={todos} filterTodos={this._filter}/>
        <List>
          {Todos}
        </List>

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
