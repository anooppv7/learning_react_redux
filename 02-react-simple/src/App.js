import React from 'react';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {counter: 0};
  }

  render(props) {
    return (
      <div className="App">
        <button>
        {this.state.counter} Upvote
        </button>
      </div>
    );
  }
};

export default App;
