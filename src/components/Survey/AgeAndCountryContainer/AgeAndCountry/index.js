import React, { Component } from "react";
import { FormGroup, Label, Input } from "reactstrap";
import PropTypes from "prop-types";
import "./index.css";
import { setAge } from "../../../../actions/index";
import { setNationality } from "../../../../actions/index";
import { connect } from "react-redux";

let strings = {
  en: {
    ageQuestion: "What is your age?",
    agePlaceholder: "Age",
    nationalityQuestion: "Where du you come from?",
    nationalityPlaceholder: "Choose..."

  },
  no: {
    ageQuestion: "Hvor gammel er du?",
    agePlaceholder: "Alder",
    nationalityQuestion: "Hvor kommer du fra?",
    nationalityPlaceholder: "Velg..."

  },
  de: {
    ageQuestion: "",
    agePlaceholder: "",
    nationalityQuestion: "",
    nationalityPlaceholder: ""
  }
};

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
      {strings[this.props.language].nationalityPlaceholder}
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
          {strings[this.props.language].ageQuestion}
          </Label>
          <Input
            type="number"
            min="6"
            max="120"
            name="age"
            id="age"
            placeholder={strings[this.props.language].agePlaceholder}
            value={this.props.age}
            onChange={e => {
              this.props.setAge(e.target.value);
            }}
            required
          />
        </FormGroup>
        <FormGroup style={{ marginTop: "30px" }}>
          <Label for="nationality" className="labelSize">
          {strings[this.props.language].nationalityQuestion}
          </Label>
          <Input
            type="select"
            name="nationality"
            id="nationality"
            value={this.props.nationality}
            onChange={e => {
              this.props.setNationality(e.target.value);
            }}
            required
          >
            {this.buildOptions()}
          </Input>
        </FormGroup>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    age: state.age,
    nationality: state.nationality,
    language: state.language
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setAge: age => {
      dispatch(setAge(age));
    },
    setNationality: nationality => {
      dispatch(setNationality(nationality));
    }
  };
};

AgeAndCountry.propTypes = {
  nationality: PropTypes.string,
  age: PropTypes.string,
  setNationality: PropTypes.func,
  setAge: PropTypes.func,
  language: PropTypes.string
};

export default connect(mapStateToProps, mapDispatchToProps)(AgeAndCountry);
