import React, { Component } from 'react';
import firebase from '../../firebase';
import AppContainer from "../../components/AppContainer";

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
        <AppContainer appTitle="Survey Finished!">
          
            <p>
            You finished the survey and your answers are send to us. Thank you!
          </p>
          
        </AppContainer>
    );
  }
}

export default Finish;
