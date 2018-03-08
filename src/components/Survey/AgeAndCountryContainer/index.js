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
    buttonText: "Senden"
  }
};

class AgeAndCountryContainer extends Component {
  render() {
    const progressValue = "100%";
    
    //this.props.surveyPage;
    return (
      <AppContainer appTitle="Survey – Emoji-Based Authentication">
        <div className="progress">
          <div
            className="progress-bar bg-success"
            role="progressbar"
            style={{ width: progressValue }}
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
          />
        </div>
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
            <Button className="surveyAnswerButton" block size="lg">
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
