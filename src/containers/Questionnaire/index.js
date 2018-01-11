import React, { Component } from 'react';
import * as Survey from 'survey-react';

// Import Bootstrap Components
import { Button } from 'reactstrap';

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
            }
          ]
        }
      ]
    }
  }

  sendDataToServer(survey) {
    var resultAsString = JSON.stringify(survey.data);
    alert(resultAsString); //send Ajax request to your web server.
  }

  render() {
    return (
      <div className="container">
        <Survey.Survey json={this.surveyJson} onComplete={this.sendDataToServer} />
      </div>
    );
  }
}

export default Questionnaire;
