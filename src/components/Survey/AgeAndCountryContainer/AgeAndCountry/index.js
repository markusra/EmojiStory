import React, { Component } from "react";
import { FormGroup, Label, Input } from "reactstrap";
import PropTypes from "prop-types";
import "./index.css";

class AgeAndCountry extends Component {
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
      <div>
        <FormGroup style={{ marginTop: "10px" }}>
          <Label for="age" className="labelSize">
            What is your age?
          </Label>
          <Input
            type="number"
            min="10"
            max="120"
            name="age"
            id="age"
            placeholder="Age"
            value={this.props.age}
            onChange={this.props.onInputChange}
            required
          />
        </FormGroup>
        <FormGroup style={{ marginTop: "30px" }}>
          <Label for="nationality" className="labelSize">
            Where do you come from?
          </Label>
          <Input
            type="select"
            name="nationality"
            id="nationality"
            value={this.props.nationality}
            onChange={this.props.onInputChange}
            required
          >
            {this.buildOptions()}
          </Input>
        </FormGroup>
      </div>
    );
  }
}

AgeAndCountry.propTypes = {
  onInputChange: PropTypes.func,
  age: PropTypes.string,
  nationality: PropTypes.string
};

export default AgeAndCountry;