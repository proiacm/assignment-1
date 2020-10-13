import React, { Component } from 'react';
import './App.css';
import UserOutput from './User/UserOutput';
import UserInput from './User/UserInput';

class App extends Component {

  state = {
    username: 'marzbarz'
  }

  upcaseUsernameHandler = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  render() {

    return (
      <div>
        <UserInput username={this.state.username} change={this.upcaseUsernameHandler}/>
        <UserOutput click={this.upcaseUsernameHandler} username={this.state.username} />
        <UserOutput username={this.state.username} />
        <UserOutput username={this.state.username} />
      </div>
    );
  }
}

export default App;
