import React, { Component } from 'react';

import TodoApp from './TodoApp';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1 className="text-center">Welcome to React!</h1>
        <TodoApp/>
        {/* container component to send data to dumb components */}
      </div>
    )
  }
}
