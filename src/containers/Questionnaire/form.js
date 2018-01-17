import React, { Component } from "react";
import PropTypes from "prop-types";
import { Form, FormGroup, Label, Input } from "reactstrap";
import { sendDataToDB } from "../../services/sendDataToDB";

class Example extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      countries: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit() {
    console.log("Test: " + this.state.value);
    sendDataToDB(this.state.value);
    // alert("A name was submitted: " + this.state.value);
    // event.preventDefault();
  }

  buildOptions() {
    var countries = [];

    for (let i = 1; i <= this.state.countries.length; i++) {
      countries.push(
        <option key={i} value="{i}">
          {this.state.countries[i]}
        </option>
      );
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
            value={this.state.value}
            onChange={this.handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleAge">Age</Label>
          <Input type="age" name="age" id="exampleAge" placeholder="age" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleSelect">Where do you come from?</Label>
          <Input type="select" name="select" id="exampleSelect" placeholder="Choose...">
          <option value="" disabled selected>Choose...</option>
            {this.buildOptions()}
          </Input>
        </FormGroup>
        <FormGroup tag="fieldset">
          <Label for="emojiUse">How often do you use emojis?</Label>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" /> Several times a day
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" /> One a day
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" /> Several times a week
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" /> Once a week
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" /> Never
            </Label>
          </FormGroup>
        </FormGroup>
      </Form>
    );
  }
}

Input.propTypes = {
  children: PropTypes.node,
  // type can be things like text, password, (typical input types) as well as select and textarea, providing children as you normally would to those.
  type: PropTypes.string,
  size: PropTypes.string,
  bsSize: PropTypes.string,
  // state: deprecated(PropTypes.string, 'Please use the prop "valid"'),
  valid: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  // ref will only get you a reference to the Input component, use innerRef to get a reference to the DOM input (for things like focus management).
  innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  // static: deprecated(PropTypes.bool, 'Please use the prop "plaintext"'),
  plaintext: PropTypes.bool,
  addon: PropTypes.bool,
  className: PropTypes.string,
  cssModule: PropTypes.object
};

Example.propTypes = {
  email: PropTypes.string
};

export default Example;
