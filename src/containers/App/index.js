import React, { Component } from 'react';
import './App.css';

// Import Bootstrap Components
import { Button } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <div className="container">
        <header className="App-header">
          <h1 className="App-title">Survey – Emoji-based Authentication</h1>
        </header>
        <p className="App-intro">
        This survey is created by Martin Kjellevand and Markus Rauhut for researching the usability and security of emoji-based authentication. 
        The data from this survey is collected for a master thesis conducted at the Norwegian University of Science and Technology. 
        The survey is divided into two parts. In order to be able to remind you about the second part, we ask you for an email address. 
        All data collected is encrypted, will be treated confidentially and is only used for research purposes. 
        No personal information will be disclosed to the public and you will not be recognizable in the publication. 
        The project is scheduled for completion by June 2018. At this point all data will be anonymised. 
        If you have any questions concerning the project, please contact us at [email address]. 
        The study has been notified to the Data Protection Official for Research, NSD - Norwegian Centre for Research Data.
        </p>

        <Button 
          color="danger"
          className="col"
        >Start</Button>

      </div>
    );
  }
}

export default App;
