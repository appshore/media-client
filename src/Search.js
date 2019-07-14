import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: ''
    }
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  async fetchResults({ search }) {
    try {
      const response = await fetch(
        `http://localhost:4000/api/media/${search}`,
        {
          mode: 'cors',
          headers: {
            'accept': 'application/json',
            'content-type': 'application/json'
          }
        }
      );

      if (!response.ok) {
        throw Error(response.statusText);
      }
      return this.props.onSearch(await response.json());
    } catch (err) {
      console.log('error', err);
    }
  };

  handleKeyDown(e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      e.stopPropagation();
      this.handleSubmit(e);
    }
  }

  handleSubmit(e) {
    this.setState({
      [e.target.name]: e.target.value
    }, () => this.fetchResults({ search: this.state.searchValue }))
  }

  render() {
    return (
      <h3 className="search">
        <input
          name="searchValue"
          type="text"
          className="searchInput"
          onKeyDown={this.handleKeyDown}
          defaultValue={this.state.searchValue}
          placeholder='Search'
        />
      </h3>
    )
  }
}


export default Search;
