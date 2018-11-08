import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {data: props.data};
  }

  render() {
    return (
      <div> 
        { this.props.data }
      </div>
    )
  }
};

export default App; 
