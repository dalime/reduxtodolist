import React, { Component } from 'react';

export default class TodoFilter extends Component {
  constructor() {
    super();

    this.state = {
      filterText: '',
      results: []
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
        <h5>Search</h5>
        <input type="text" onChange={this._onInputChange} className="form-control" autoComplete={this.state.results}/>
        <button className="btn btn-warning">Search</button>
      </form>
    )
  }
}
