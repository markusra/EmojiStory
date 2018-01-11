import React, { Component } from "react";
import * as Survey from "survey-react";
import history from "../../history";

class Questionnaire extends Component {
  constructor() {
    super();
    this.surveyJson = {
      locale: "en",
      pages: [
        {
          elements: [
            {
              type: "radiogroup",
              choices: ["Female", "Male", "Other", "Rather not say"],
              isRequired: true,
              name: "Gender"
            }
          ],
          name: "page1"
        },
        {
          elements: [
            {
              type: "text",
              isRequired: true,
              name: "Age",
              placeHolder: "13",
              validators: [
                {
                  type: "numeric",
                  maxValue: 120,
                  minValue: 0
                }
              ]
            }
          ],
          name: "page2"
        }
      ],
      showCompletedPage: false,
      showPageTitles: false
    };
  }

  sendDataToServer(survey) {
    // eslint-disable-next-line
    var resultAsString = JSON.stringify(survey.data);

    history.push("/finish");
  }

  render() {
    return (
      <div className="container">
        <Survey.Survey
          json={this.surveyJson}
          onComplete={this.sendDataToServer}
        />
      </div>
    );
  }
}

export default Questionnaire;
