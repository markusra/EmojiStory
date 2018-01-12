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
        elements: [
         {
          type: "radiogroup",
          name: "gender",
          title: "Gender:",
          choices: [
           "Female",
           "Male",
           "Other",
           "Rather not say"
          ]
         },
         {
          type: "text",
          name: "age",
          title: "Please enter your age:"
         },
         {
          type: "dropdown",
          choices: [
           "item1",
           "item2",
           "item3"
          ],
          choicesByUrl: {
           url: "https://restcountries.eu/rest/v2/all"
          },
          name: "country",
          title: "Where do you come from?"
         },
         {
          type: "dropdown",
          choices: [
           "Arts and entertainment",
           "Business",
           "Industrial and manufacturing",
           "Law enforcement",
           "Science and technology",
           "IT",
           "Healthcare and medicine",
           "Service and sales",
           "High school",
           "Primary school",
           "Other",
           "Rather not say"
          ],
          name: "profession",
          title: "Please select your line of work or field of study:"
         },
         {
          type: "radiogroup",
          name: "emoji-use",
          title: "How often do you use emojis?",
          choices: [
           "Once a day",
           "Several times a week",
           "Once a week",
           "Never"
          ]
         }
        ]
       }
      ]
     }
  }

  componentWillMount() {    
    Survey.Survey.cssType = "bootstrap";
    Survey.defaultBootstrapCss.navigationButton = 'btn btn-success';
  }

  sendDataToDB(survey) {
    var json = survey.data
    var database = firebase.database();

    const personsRef = database.ref('users');
    
    personsRef.push(json);
  }

  render() {
    return (
      <Survey.Survey json={this.surveyJson} onComplete={this.sendDataToDB} />
    );
  }
}

export default Questionnaire;

