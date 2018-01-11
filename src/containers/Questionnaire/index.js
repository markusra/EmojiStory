import React, { Component } from 'react';
import * as Survey from 'survey-react';
import firebase from '../../firebase'; 

class Questionnaire extends Component {
  constructor() {
    super();
    this.surveyJson = {
      pages: [
        {
          name: "page1",
          questions: [
            {
              type: "text",
              name: "age",
              title: "enter age"
            },
            {
              type: "text",
              name: "gender",
              title: "enter gender"
            },
          ]
        }
      ]
    }
  }

  sendDataToDB(survey) {
    var json = survey.data
    var database = firebase.database();

    const personsRef = database.ref('users');
    
    personsRef.push(json);
  }

  render() {
    return (
      <div className="container">
        <Survey.Survey json={this.surveyJson} onComplete={this.sendDataToDB} />
      </div>
    );
  }
}

export default Questionnaire;
