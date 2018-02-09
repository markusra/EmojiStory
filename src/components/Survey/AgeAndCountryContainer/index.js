import React, { Component } from "react";
import PropTypes from "prop-types";
import AgeAndCountry from "./AgeAndCountry/index";
import AppContainer from "../../AppContainer";
import AppFooter from "../../AppFooter";
import "./index.css"

// Import Bootstrap Components
import { Button, Form } from "reactstrap";

class AgeAndCountryContainer extends Component {
  render() {
    return (
      <AppContainer appTitle="Survey – Emoji-Based Authentication">
        <Form
          onSubmit={event => {
            event.preventDefault();
            this.props.onSubmitForm();
          }}
        >
          <div className="age-country-body">
            <AgeAndCountry
              ref={instance => {
                this.child = instance;
              }}
              onInputChange={this.props.onInputChange}
              age={this.props.age}
              nationality={this.props.nationality}
            />
          </div>
          <AppFooter className="age-country-body">
            <Button
              block
              size="lg"
              style={{
                color: "white",
                backgroundColor: "#1b212c",
              }}
            >
              Submit
            </Button>
          </AppFooter>
        </Form>
      </AppContainer>
    );
  }
}

AgeAndCountryContainer.propTypes = {
  onSubmitForm: PropTypes.func,
  onInputChange: PropTypes.func,
  age: PropTypes.string,
  nationality: PropTypes.string
};

export default AgeAndCountryContainer;
