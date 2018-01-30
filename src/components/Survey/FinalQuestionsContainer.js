import React, { Component } from "react";
import FinalQuestions from "./FinalQuestions";
import FormContainer from "./FormContainer";
import AppBody from "../../components/AppBody";
import PropTypes from "prop-types";

class FinalQuestionsContainer extends Component {

  render() {
    return (
      <FormContainer appTitle="Survey – Emoji-Based Authentication">
        <AppBody>
          <FinalQuestions
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
