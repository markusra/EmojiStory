import React from "react";
import { FormGroup, Label, Input, Button } from "reactstrap";
import FormContainer from "./FormContainer";
import AppBody from "../../components/AppBody";
import { sendDataToDB } from "../../services/sendDataToDB";
import history from "./../../history";

export default class ValidationTest extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      age: "",
      nationality: "",
      emojiUse: "",
      errors: [],
      countries: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.sendToDB = this.sendToDB.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
    // this.validate = this.validate.bind(this);
    // this.email = this.email.bind(this);
    // this.customFeedback =this.customFeedback.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
    // e.target.setCustomValidity("HeiHeiAlleSammen");
    
  }

  sendToDB() {
    sendDataToDB(
      this.state.email,
      this.state.age,
      "hei",
      "sann",
      "hei",
      "sann"
    );
  }

  handleSubmit = event => {
    // event.preventDefault();

    // const email = this.state.email;
    // const age = this.state.age;
    // const nationality = this.state.nationality;
    // const emojiUse = this.state.emojiUse;
    // const errors = this.validate(email, age, nationality, emojiUse);

    // if (errors.length > 0) {
    //   this.setState({ errors });
    //   return;
    // } else {
    //   this.sendDataToDB();
    //   console.log("Nå er det sendt!");
    // }

    this.sendToDB();
    history.push("finish");
  };

  // validate(email, age, nationality, emojiUse) {
  //   const errors = [];
  //   const ageNumber = parseInt(age, 10);

  //   if (email === "") {
  //     errors.push("Email can't be empty");
  //   }
  //   var re = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  //   if (!re.test(email)) {
  //     errors.push("Please enter a valid email address");
  //   }

  //   if (!(ageNumber > 9 && ageNumber < 121)) {
  //     errors.push("Age should be between 10 and 120");
  //     // this.setCustomValidity("I expect an e-mail, darling!");
  //   }
  //   if (nationality === "") {
  //     errors.push("Please select a nationality");
  //   }
  //   if (emojiUse === "") {
  //     errors.push("Please select your emojiUse!");
  //   }
  //   return errors;
  // }

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

  // customFeedback(element) {
  //   const formElement = document.querySelector("#" + element);
  //   // const errors = [];
  //   if (formElement.value === "") {
  //     formElement.setCustomValidity("Please answer this questions.");
  //     // errors.push("Input can't be empty!");
  //   }
  //   var re = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  //   if (!re.test(formElement.value)) {
  //     formElement.setCustomValidity("Please enter a valid email address");
  //     // errors.push("Please enter a valid email address");
  //   }
  //   return errors;
  // }


  render() {
    console.log(this.state.errors);
    return (
      <FormContainer appTitle="Survey – Emoji-Based Authentication">
        <AppBody>
          <form
            className="needs-validation"
            // noValidate
            onSubmit={event => {
              this.handleSubmit(event);
            }}
          >
            <FormGroup>
              <label htmlFor="validationCustom01">Email address</label>
              <input
                type="email"
                name="email"
                className="form-control"
                id="validationCustom01"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                value={this.state.email}
                onChange={e => {
                  this.handleChange(e);
                  // this.customFeedback("validationCustom01");
                }}
                required
              />
              {/* <div className="valid-feedback">Looks good!</div>
              <div className="invalid-feedback">
                Please enter a valid email.
              </div> */}
            </FormGroup>
            <div className="form-group">
              <label htmlFor="validationCustom02">Age</label>
              <input
                type="number"
                min="10"
                max="120"
                name="age"
                className="form-control"
                id="validationCustom02"
                aria-describedby="emailHelp"
                placeholder="Enter age"
                value={this.state.age}
                onChange={e => {
                  this.handleChange(e);
                }}
                required
              />
              {/* <div className="valid-feedback">Looks good!</div>
              <div className="invalid-feedback">Please enter a valid age.</div> */}
            </div>
            <FormGroup>
              <Label for="validationCustom03">Where do you come from?</Label>
              <Input
                type="select"
                name="nationality"
                id="validationCustom03"
                className="form-control"
                value={this.state.nationality}
                onChange={e => {
                  this.handleChange(e);
                }}
                required
              >
                {this.buildOptions()}
              </Input>
              {/* <div className="valid-feedback">Looks good!</div>
              <div className="invalid-feedback">
                Please select your nationality.
              </div> */}
            </FormGroup>

            <Label for="validationCustom04">How often do you use emojis?</Label>
            <FormGroup
              tag="fieldset"
              id="validationCustom04"
              className="form-control"
            >
              <FormGroup check>
                <Label check>
                  <Input
                    type="radio"
                    name="emojiUse"
                    value="Several times a day"
                    onChange={e => {
                      this.handleChange(e);
                    }}
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
                    onChange={e => {
                      this.handleChange(e);
                    }}
                    required
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
                    onChange={e => {
                      this.handleChange(e);
                    }}
                    required
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
                    onChange={e => {
                      this.handleChange(e);
                    }}
                    required
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
                    onChange={e => {
                      this.handleChange(e);
                    }}
                    required
                  />{" "}
                  Never
                </Label>
              </FormGroup>
              {/* <div className="valid-feedback">Ser bra ut!</div>
            <div className="invalid-feedback">Halla!</div> */}
            </FormGroup>
            
            <div className="app-footer" style={{padding: "10px 30px 15px 0px", zIndex: 9999, backgroundColor: "#ffffff00", boxShadow: "0px -3px 15px #ffffff00"} }>
            <Button
              color="success"
              className="col"
            >
              Submit
            </Button>
            </div>
          </form>
        </AppBody>
      </FormContainer>
    );
  }
}
