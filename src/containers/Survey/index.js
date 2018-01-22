import React, { Component } from "react";
import { Button } from "reactstrap";
import Questionnaire from "../../components/Questionnaire";
import AppContainer from "../../components/AppContainer";
import AppBody from "../../components/AppBody";
import AppFooter from "../../components/AppFooter";
import PropTypes from "prop-types";

class Survey extends Component {
  render() {
    return (
      <AppContainer appTitle="Survey – Emoji-Based Authentication">
        <AppBody>
          <Questionnaire
            ref={instance => {
              this.child = instance;
            }}
            onSubmitForm={this.props.onSubmitForm}
            onEmailChange={this.props.onEmailChange}
            email={this.props.email}
            onAgeChange={this.props.onAgeChange}
            age={this.props.age}
            onNationalityChange={this.props.onNationalityChange}
            nationality={this.props.nationality}
            onEmojiUseChange={this.props.onEmojiUseChange}
            emojiUse={this.props.emojiUse}
          />
        </AppBody>
        <AppFooter>
          <Button
            color="success"
            className="col"
            onClick={() => {
              this.props.onSubmitForm();
              this.props.finished();
            }}
          >
            Submit
          </Button>
        </AppFooter>
      </AppContainer>
    );
  }
}

Survey.propTypes = {
  onEmailChange: PropTypes.func,
  email: PropTypes.string,
  onSubmitForm: PropTypes.func,
  age: PropTypes.string,
  onAgeChange: PropTypes.func,
  nationality: PropTypes.string,
  onNationalityChange: PropTypes.func,
  emojiUse: PropTypes.string,
  onEmojiUseChange: PropTypes.func,
  finished: PropTypes.func
};

export default Survey;
