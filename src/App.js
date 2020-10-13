import React, { Component } from 'react';
import './App.css';
import UserOutput from './User/UserOutput';

class App extends Component {

  state = {
    username: 'marzbarz'
  }

  render() {
    return (
      <div>
        <UserOutput username={this.state.username} />
        <UserOutput username={this.state.username} />
        <UserOutput username={this.state.username} />
      </div>
    );
  }
}

export default App;
