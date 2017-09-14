import React, { Component } from 'react';

class App extends Component {
  handleClick = () => {
    fetch('/api/ping')
      .then(res => res.text())
      .then(x => console.log(x));
  };

  render() {
    return (
      <div>
        <h1>Test</h1>
        <button onClick={this.handleClick}>ping</button>
      </div>
    );
  }
}

export default App;
