import React, { Component } from "react";
import PropTypes from "prop-types";
import AgeAndCountry from "./AgeAndCountry/index";
import AppContainer from "../../AppContainer";
import AppFooter from "../../AppFooter";
import "./index.css";
import { connect } from "react-redux";
import { Button, Form } from "reactstrap";

let strings = {
  en: {
    buttonText: "Submit"
  },
  no: {
    buttonText: "Send"
  },
  de: {
    buttonText: "Sende"
  }
};

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
            />
          </div>
          <AppFooter className="age-country-body">
            <Button
              className="surveyAnswerButton"
              block
              size="lg"
            >
              {strings[this.props.language].buttonText}
            </Button>
          </AppFooter>
        </Form>
      </AppContainer>
    );
  }
}

const mapStateToProps = state => {
  return {
    language: state.language
  };
};

AgeAndCountryContainer.propTypes = {
  onSubmitForm: PropTypes.func,
  language: PropTypes.string
};

export default connect(mapStateToProps)(AgeAndCountryContainer);
