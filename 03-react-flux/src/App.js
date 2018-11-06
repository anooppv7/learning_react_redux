import React, { Component } from 'react';

const CountTracker = (props) => {
  return (
    <div>
      { props.counter }
    </div>
  );
};

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
    this.props.incrementCounter();
	}

	render() {
		return (
			<button onClick={this.handleClick}>
				{this.state.counter} Upvote
			</button>
		);
	}
}

class DownVote extends React.Component {
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
    this.props.decrementCounter();
	}

	render() {
		return (
			<button onClick={this.handleClick}>
				{this.state.counter} Downvote
			</button>
		);
	}
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { overallCounter : 0 };
  }

  incrementCounter = () => {
    this.setState({
      overallCounter: this.state.overallCounter + 1 
    });
  };

  decrementCounter = () => {
    this.setState({
      overallCounter: this.state.overallCounter - 1 
    });
  };

  render() {
    return (
      <div className="App">
        <CountTracker counter={this.state.overallCounter} />
        <br/>
        <UpVote counter="0" incrementCounter={this.incrementCounter}/>
        <br/><br/>
        <DownVote counter="0" decrementCounter={this.decrementCounter}/>
      </div>
    );
  }
}

export default App;
