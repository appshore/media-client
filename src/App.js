import React from 'react';

import Images from './Images';
import Search from './Search';
import Video from './Video';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: []
    };

    this.search = this.search.bind(this);
  }

  search(results) {
    this.setState({ images: results.images, video: results.video && results.video[0] });
  }

  render() {
    return (
      <div className="App">
        <header className="header">
          <h2>Search images or videos</h2>
        </header>
        <content>
          <Search onSearch={this.search} />
          <Video data={this.state.video} />
          <Images data={this.state.images} />
        </content>
      </div>
    );
  }
}

export default App;
