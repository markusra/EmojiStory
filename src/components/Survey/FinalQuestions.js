import React, { Component } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import PropTypes from "prop-types";
import "./index.css";

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
    // const isEnabled =
    // this.props.email.length > 0 &&
    // this.props.age.length > 0;
    // this.validateForm();
    return (
      <Form
        className="needs-validation"
        // noValidate
        onSubmit={event => {
          event.preventDefault();
          this.props.onSubmitForm();
        }}
      >
        <FormGroup>
          <Label for="exampleAge">Age</Label>
          <Input
            type="number"
            min="10"
            max="120"
            name="age"
            id="exampleAge"
            placeholder="Age"
            value={this.props.age}
            onChange={this.props.onInputChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleSelect">Where do you come from?</Label>
          <Input
            type="select"
            name="nationality"
            id="exampleSelect"
            value={this.props.nationality}
            onChange={this.props.onInputChange}
            required
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
                name="emojiUse"
                value="Several times a day"
                onChange={this.props.onInputChange}
                required
              />{" "}
              Several times a day
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input
                type="radio"
                name="emojiUse"
                value="Once a day"
                onChange={this.props.onInputChange}
              />{" "}
              Once a day
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input
                type="radio"
                name="emojiUse"
                value="Several times a week"
                onChange={this.props.onInputChange}
              />{" "}
              Several times a week
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input
                type="radio"
                name="emojiUse"
                value="Once a week"
                onChange={this.props.onInputChange}
              />{" "}
              Once a week
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input
                type="radio"
                name="emojiUse"
                value="Never"
                onChange={this.props.onInputChange}
              />{" "}
              Never
            </Label>
          </FormGroup>
        </FormGroup>

        <FormGroup tag="fieldset">
          <Label for="memorization">Did you memorize the emojis or the story?</Label>
          <FormGroup check>
            <Label check>
              <Input
                type="radio"
                name="memorization"
                value="Emojis"
                onChange={this.props.onInputChange}
                required
              />
              The emojis
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input
                type="radio"
                name="memorization"
                value="Story"
                onChange={this.props.onInputChange}
                required
              />
              The story
            </Label>
          </FormGroup>
        </FormGroup>

        <FormGroup tag="fieldset">
          <Label for="memorization">Did you understand the meaning of all the emojis in your login keyboard?</Label>
          <FormGroup check>
            <Label check>
              <Input
                type="radio"
                name="understandable"
                value="Yes"
                onChange={this.props.onInputChange}
                required
              />
              Yes
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input
                type="radio"
                name="memorization"
                value="No"
                onChange={this.props.onInputChange}
                required
              />
              No
            </Label>
          </FormGroup>
        </FormGroup>



        {/* <div className="form-footer"> */}
          <Button color="success" className="col">
            Submit
          </Button>
        {/* </div> */}
      </Form>
    );
  }
}

FinalQuestions.propTypes = {
  onSubmitForm: PropTypes.func,
  onInputChange: PropTypes.func,
  email: PropTypes.string,
  age: PropTypes.string,
  nationality: PropTypes.string,
  emojiUse: PropTypes.string
};

export default FinalQuestions;
