import React, { Component } from 'react';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

//import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

const style = {
  addButton: {
    marginRight: 20
  }
};

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
        <TextField
          hintText="Todo"
          floatingLabelText="Add Todo"
          floatingLabelFixed={false}
          onChange={this._onInputChange}
          value={todo}
        /><br />
        {/* <input type="text" value={todo} onChange={this._onInputChange} className="form-control"/> */}
        {/* <RaisedButton label="Add" secondary={true} style={style.addButton} /> */}
        <FloatingActionButton style={style.addButton}>
          <ContentAdd />
        </FloatingActionButton>
      </form>
    )
  }
}
