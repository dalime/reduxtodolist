import React, { Component } from 'react';
import { connect } from 'react-redux';

import { createTodo, deleteTodo, editTodo } from '../actions/TodoActions';

import TodoList from './TodoList';
import TodoForm from './TodoForm';

class TodoApp extends Component {
  render() {
    let { todos, createTodo, deleteTodo, editTodo } = this.props;

    return (
      <div className="container">
        <h1>Todos</h1>
        <TodoForm createTodo={createTodo} />
        <TodoList todos={todos}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
        />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    todos: state.todos
  }
}

function mapDispatchToProps(dispatch) {
  return {
    createTodo(todo) {
      dispatch(createTodo(todo));
    },
    deleteTodo(index) {
      dispatch(deleteTodo(index));
    },
    editTodo(index, todo) {
      dispatch(editTodo(index, todo));
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoApp);
