import React, { Component } from 'react';
import * as Survey from 'survey-react';
import "./index.css";
import history from"../../history"
import { sendDataToDB } from '../../services/sendDataToDB';

class Questionnaire extends Component {
  constructor() {
    super();
    this.surveyJson = {pages:[{name:"page1",elements:[{type:"radiogroup",choices:["Female","Male","Other","Rather not say"],name:"gender",title:"Gender:"},{type:"text",name:"age",title:"Please enter your age:"},{type:"dropdown",choices:["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31","32","33","34","35","36","37","38","39","40","41","42","43","44","45","46","47","48","49","50","51","52","53","54","55","56","57","58","59","60","61","62","63","64","65","66","67","68","69","70","71","72","73","74","75","76","77","78","79","80","81","82","83","84","85","86","87","88","89","90","91","92","93","94","95","96","97","98","99","100","101","102","103","104","105","106","107","108","109","110","111","112","113","114","115","116","117","118","119","120"],name:"age2",title:"What is your age?"},{type:"dropdown",choices:["item1","item2","item3"],choicesByUrl:{url:"https://restcountries.eu/rest/v2/all"},name:"country",title:"Where do you come from?"},{type:"dropdown",choices:["Arts and entertainment","Business","Industrial and manufacturing","Law enforcement","Science and technology","IT","Healthcare and medicine","Service and sales","High school","Primary school","Other","Rather not say"],name:"profession",title:"Please select your line of work or field of study:"},{type:"radiogroup",choices:["Several times a day","Once a day","Several times a week","Once a week","Never"],name:"emoji-use",title:"How often do you use emojis?"}]}],title:"Header"}

  }

  componentWillMount() {    
    Survey.Survey.cssType = "bootstrap";
    Survey.defaultBootstrapCss.navigationButton = 'btn btn-success';

    var model = new Survey.Model(this.surveyJson);
    
    model.onUpdateQuestionCssClasses.add(function(survey, options) {
      var classes = options.cssClasses

        classes.body = "panel-body";
        classes.header = "panel-heading";
    });
  }

  render() {
    var model = new Survey.Model(this.surveyJson);
    model.onComplete.add(function() {
      history.push("/finish");
      sendDataToDB(model.data);
    });
    return (
      // <Survey.Survey json={this.surveyJson} onComplete={this.sendDataToDB} />
      <div className="container questionnaire-container">
        <Survey.Survey model={model} />
      </div>
    );
  }
}

export default Questionnaire;
