import React, { Component } from "react";

import AgeAndCountry from "./AgeAndCountry/index";
import AppContainer from "../../components/AppFooter";
import AppFooter from "../../components/AppFooter";
import AppBody from "../../components/AppBody";

// Import Bootstrap Components
import { Button, Form } from "reactstrap";

import FormContainer from "./FormContainer";
import PropTypes from "prop-types";

class FinalQuestionsContainer extends Component {
  render() {
    return (
      <FormContainer appTitle="Survey – Emoji-Based Authentication">
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
              onSubmitForm={this.props.onSubmitForm}
              onInputChange={this.props.onInputChange}
              age={this.props.age}
              email={this.props.email}
              nationality={this.props.nationality}
              emojiUse={this.props.emojiUse}
            />
          </AppBody>
          <AppFooter>
            <Button color="success" size="lg" block>
              Submit
            </Button>
          </AppFooter>
        </Form>
      </FormContainer>
    );
  }
}

FinalQuestionsContainer.propTypes = {
  onSubmitForm: PropTypes.func,
  onInputChange: PropTypes.func,
  email: PropTypes.string,
  age: PropTypes.string,
  nationality: PropTypes.string,
  emojiUse: PropTypes.string
};

export default FinalQuestionsContainer;
