import React, { Component } from "react";

import AgeAndCountry from "./AgeAndCountry/index";
import AppContainer from "../../components/AppContainer";
import AppFooter from "../../components/AppFooter";
import AppBody from "../../components/AppBody";

// Import Bootstrap Components
import { Button, Form } from "reactstrap";

import PropTypes from "prop-types";

class FinalQuestionsContainer extends Component {
  render() {
    return (
      <AppContainer appTitle="Survey – Emoji-Based Authentication">
        <Form
          className="needs-validation"
          // noValidate
          onSubmit={event => {
            event.preventDefault();
            this.props.onSubmitForm();
          }}
        >
          <AppBody>
            <AgeAndCountry
              ref={instance => {
                this.child = instance;
              }}
              onInputChange={this.props.onInputChange}
              age={this.props.age}
              nationality={this.props.nationality}
            />
          </AppBody>
          <AppFooter>
            <Button color="success" size="lg" block>
              Submit
            </Button>
          </AppFooter>
        </Form>
      </AppContainer>
    );
  }
}

FinalQuestionsContainer.propTypes = {
  onSubmitForm: PropTypes.func,
  onInputChange: PropTypes.func,
  age: PropTypes.string,
  nationality: PropTypes.string
};

export default FinalQuestionsContainer;
