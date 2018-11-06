import React from 'react';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {counter: 0};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(
      // updater function
      function(currentState, props) {
        return { counter : currentState.counter + 1 };
      }, 
      // callback function when updater finishes
      function() {
        console.log("async :: " + this.state.counter);
      }
    );
    console.log(this.state.counter);
    this.setState({counter : this.state.counter + 1} );
    console.log(this.state.counter);
    this.setState({counter : this.state.counter + 1} );
    console.log(this.state.counter);
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
