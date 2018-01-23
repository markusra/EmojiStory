import React, { Component } from "react";
import { Form, FormGroup, Label, Input } from "reactstrap";
import { AvForm, AvField, AvGroup, AvInput, AvFeedback } from 'availity-reactstrap-validation';
import PropTypes from "prop-types";

class FinalQuestions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: [],
      email2: false
    };
    this.handleValidSubmit = this.handleValidSubmit.bind(this);
    this.handleInvalidSubmit = this.handleInvalidSubmit.bind(this);
  }

  validateForm() {
    var hasErrors = false;

    if (this.props.email === '') {
      this.setError("email", "Please enter your email address");
      hasErrors = true;
    } else this.setError("email", null)

    if (this.props.email !== /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/) {
      this.setError("email", "Please enter a valid email address");
      hasErrors = true;
    } else this.setError("email", null)


    return !hasErrors;
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

  handleValidSubmit(event, values) {
    console.log("Valid")
    this.setState({email2: values.email});
  }

  handleInvalidSubmit(event, errors, values) {
    console.log("invalid")
    this.setState({email2: values.email, error: true});
  }

  render() {
    return (
      <AvForm onValidSubmit={this.handleValidSubmit() && console.log("Heisann")} onInvalidSubmit={this.handleInvalidSubmit() && console.log("Snakkes")}>
        <AvGroup>
          <Label for="exampleEmail">Email</Label>
          <AvInput
            label="Email address"
            type="email"
            name="email"
            id="exampleEmail"
            placeholder="email@example.com"
            value={this.props.email}
            onChange={e => this.props.onEmailChange(e.target.value)}
            required

          />
          <AvFeedback>Email is required</AvFeedback>
        </AvGroup>
        <AvGroup>
          <Label for="exampleAge">Age</Label>
          <AvInput
            type="number"
            name="age"
            id="exampleAge"
            placeholder="age"
            value={this.props.age}
            onChange={e => this.props.onAgeChange(e.target.value)}
            required
          />
        </AvGroup>
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
      </AvForm>
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
