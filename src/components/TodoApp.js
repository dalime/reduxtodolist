import React, { Component } from 'react';
import { connect } from 'react-redux';

import { createTodo } from '../actions/TodoActions';

import TodoList from './TodoList';
import TodoForm from './TodoForm';

class TodoApp extends Component {
  render() {
    let { todos, createTodo } = this.props;

    return (
      <div>
        <h1>TodoApp</h1>
        <TodoForm createTodo={createTodo} />
        <TodoList todos={todos} />
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
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoApp);
