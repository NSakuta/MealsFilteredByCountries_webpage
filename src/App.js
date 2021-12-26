import React from 'react';
import './App.css';
import MyComponent from './MyComponent';

class App extends React.Component{
  state = {
    isShow: true
  }

  render() {
    return (
      <div className="App">
        <button onClick={() => this.setState({isShow: !this.state.isShow})}>hide</button>
        {this.state.isShow ? <MyComponent name='My component'></MyComponent> : null}
      </div>
    );
  }
  
}

export default App;
