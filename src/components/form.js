import React, { Component } from "react";
import { Form, FormGroup, Label, Input } from "reactstrap";
import { sendDataToDB } from "../services/sendDataToDB";
import history from "../history";

class Questionnaire extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      age: "",
      nationality: "",
      emojiUse: "",
      countries: []
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    sendDataToDB(
      this.state.email,
      this.state.age,
      this.state.nationality,
      this.state.emojiUse
    );
    history.push("/finish");
  }

  buildOptions() {
    var countries = [];
    countries[0] = (
      <option key={0} value="" disabled hidden>
        Choose...
      </option>
    );

    for (let i = 1; i <= this.state.countries.length; i++) {
      countries.push(<option key={i}>{this.state.countries[i]}</option>);
    }
    return countries;
  }

  componentDidMount() {
    fetch("https://restcountries.eu/rest/v2/all")
      .then(response => response.json())
      .then(json => {
        var array = [];
        for (let i = 0; i <= json.length - 1; i++) {
          array.push(json[i].name);
        }
        this.setState({
          countries: array
        });
      })
      .catch(error => {
        throw error;
      });
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input
            type="email"
            name="email"
            id="exampleEmail"
            placeholder="email@example.com"
            value={this.state.email}
            onChange={e => this.setState({ email: e.target.value })}
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleAge">Age</Label>
          <Input
            type="age"
            name="age"
            id="exampleAge"
            placeholder="age"
            value={this.state.age}
            onChange={e => this.setState({ age: e.target.value })}
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleSelect">Where do you come from?</Label>
          <Input
            type="select"
            name="select"
            id="exampleSelect"
            value={this.state.nationality}
            onChange={e => this.setState({ nationality: e.target.value })}
          >
            {this.buildOptions()}
          </Input>
        </FormGroup>
        <FormGroup tag="fieldset">
          <Label for="emojiUse">How often do you use emojis?</Label>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" value = "Several times a day" onChange={e => this.setState({ emojiUse: e.target.value })}/> Several times a day
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" value = "Once a day" onChange={e => this.setState({ emojiUse: e.target.value })} /> Once a day
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" value = "Several times a week" onChange={e => this.setState({ emojiUse: e.target.value })} /> Several times a week
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" value = "Once a week" onChange={e => this.setState({ emojiUse: e.target.value })} /> Once a week
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" value = "Never" onChange={e => this.setState({ emojiUse: e.target.value })} /> Never
            </Label>
          </FormGroup>
        </FormGroup>
      </Form>
    );
  }
}

export default Questionnaire;
