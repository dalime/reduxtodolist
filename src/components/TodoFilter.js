import React, { Component } from 'react';

import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

import AutoComplete from 'material-ui/AutoComplete';

const style = {
  addButton: {
    margin: 12,
    backgroundColor: "blue"
  },
  searchButton: {
    margin: 12
  }
};

export default class TodoFilter extends Component {
  constructor() {
    super();

    this.state = {
      filterText: ''
    }

    this._onInputChange = this._onInputChange.bind(this);
    this._search = this._search.bind(this);
  }

  _onInputChange(e) {
    let filterText = e.target.value;
    this.setState({ filterText });
  }

  _search(e) {
    e.preventDefault();
    let { filterText } = this.state;
    this.props.filterTodos(filterText);
    this.setState({
      filterText: ''
    })
  }

  render() {
    return (
      <form onSubmit={this._search} className="form-group">
        <AutoComplete
          floatingLabelText="Search"
          filter={AutoComplete.caseInsensitiveFilter}
          dataSource={this.props.todos}
          onChange={this._onInputChange}
          maxSearchResults={5}
        /><br />
        <RaisedButton type="submit" label="Search" secondary={true} style={style.searchButton} />
      </form>
    )
  }
}
