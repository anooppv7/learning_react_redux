import React from 'react';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {counter: 0};
  }

  handleClick() {
    this.state.counter ++;
  }

  render(props) {
    return (
      <div className="App">
        <button onClick={this.handleClick}>
        {this.state.counter} Upvote
        </button>
      </div>
    );
  }
};

export default App;
