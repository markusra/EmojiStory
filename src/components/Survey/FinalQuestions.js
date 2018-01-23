import React, { Component } from "react";
import { Form, FormGroup, Label, Input } from "reactstrap";
import PropTypes from "prop-types";

class FinalQuestions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: []
    };
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
      <Form>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input
            type="email"
            name="email"
            id="exampleEmail"
            placeholder="email@example.com"
            value={this.props.email}
            onChange={e => this.props.onEmailChange(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleAge">Age</Label>
          <Input
            type="age"
            name="age"
            id="exampleAge"
            placeholder="age"
            value={this.props.age}
            onChange={e => this.props.onAgeChange(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleSelect">Where do you come from?</Label>
          <Input
            type="select"
            name="select"
            id="exampleSelect"
            value={this.props.nationality}
            onChange={e => this.props.onNationalityChange(e.target.value)}
          >
            {this.buildOptions()}
          </Input>
        </FormGroup>
        <FormGroup tag="fieldset">
          <Label for="emojiUse">How often do you use emojis?</Label>
          <FormGroup check>
            <Label check>
              <Input
                type="radio"
                name="radio1"
                value="Several times a day"
                onChange={e => this.props.onEmojiUseChange(e.target.value)}
              />{" "}
              Several times a day
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input
                type="radio"
                name="radio1"
                value="Once a day"
                onChange={e => this.props.onEmojiUseChange(e.target.value)}
              />{" "}
              Once a day
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input
                type="radio"
                name="radio1"
                value="Several times a week"
                onChange={e => this.props.onEmojiUseChange(e.target.value)}
              />{" "}
              Several times a week
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input
                type="radio"
                name="radio1"
                value="Once a week"
                onChange={e => this.props.onEmojiUseChange(e.target.value)}
              />{" "}
              Once a week
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input
                type="radio"
                name="radio1"
                value="Never"
                onChange={e => this.props.onEmojiUseChange(e.target.value)}
              />{" "}
              Never
            </Label>
          </FormGroup>
        </FormGroup>
      </Form>
    );
  }
}

FinalQuestions.propTypes = {
  onEmailChange: PropTypes.func,
  email: PropTypes.string,
  age: PropTypes.string,
  onAgeChange: PropTypes.func,
  nationality: PropTypes.string,
  onNationalityChange: PropTypes.func,
  emojiUse: PropTypes.string,
  onEmojiUseChange: PropTypes.func
};

export default FinalQuestions;
