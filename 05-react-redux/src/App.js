import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {data: props.data};
  }

  render() {
    return (
      <div> 
        <h1>{ this.props.data }</h1>
        <button onClick={this.props.onIncrement}>UpVote</button>
        <button onClick={this.props.onDecrement}>DownVote</button>
      </div>
    )
  }
};

export default App; 
