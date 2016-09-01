import React, { Component } from 'react';

import TodoApp from './TodoApp';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1 className="text-center">Redux Todo List</h1>
        <TodoApp/>
      </div>
    )
  }
}
