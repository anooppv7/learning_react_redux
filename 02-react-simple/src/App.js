import React from 'react';

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render(props) {
    return (
      <div className="App">
        Hello {this.props.name} !
      </div>
    );
  }
};

export default App;
