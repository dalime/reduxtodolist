import React, { Component } from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import TodoApp from './TodoApp';

export default class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <h1 className="text-center">Redux Todo List</h1>
          <TodoApp/>
        </div>
      </MuiThemeProvider>
    )
  }
}
