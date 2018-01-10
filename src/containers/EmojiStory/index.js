import React, { Component } from 'react';
// Import Bootstrap Components
import { Button } from 'reactstrap';

class Welcome extends Component {
  render() {

    return (
      <div className="container">
        <header className="App-header">
          <h1 className="App-title">Survey – Emoji-based Authentication</h1>
        </header>
        <p className="App-intro">
        Hei på du!</p>

        <Button 
          color="success"
          className="col"
          href="/finish"
        >Cool</Button>

      </div>
    );
  }
}

export default Welcome;
