import React, { Component } from 'react';

class CountTracker extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0};
  }

  render() {
    return (
      <div>
        { this.state.counter }
      </div>
    );
  }
}

class UpVote extends React.Component {
	constructor(props) {
		super(props);
		this.state = {counter: 0};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.setState(state => ({
			counter: state.counter + 1
		}));
	}

	render() {
		return (
			<button onClick={this.handleClick}>
				{this.state.counter} Upvote
			</button>
		);
	}
}
class App extends Component {
  render() {
    return (
      <div className="App">
        <CountTracker counter="0"/>
        <br/>
        <UpVote counter="0"/>
      </div>
    );
  }
}

export default App;
