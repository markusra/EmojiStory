import React, { Component } from 'react';
import firebase from '../../firebase'; 

class Finish extends Component { 
  render() {

    var database = firebase.database();

    const personsRef = database.ref('persons');
    const person = {
      username: 'Test',
      email: 'email'
    }
    
    personsRef.push(person);

    return (
      <div className="container">
        <header className="App-header">
          <h1 className="App-title">Finished – Saved to database</h1>
        </header>
      </div>
    );
  }
}

export default Finish;
