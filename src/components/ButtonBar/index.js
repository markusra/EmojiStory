import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

// Connect to Redux store
import { connect } from "react-redux";

// Import Bootstrap Components
import { Button, Row, Col } from "reactstrap";

let strings = {
  en: {
    back: "Back",
    continue: "Continue"
  },
  no: {
    back: "Tilbake",
    continue: "Fortsett"
  },
  de: {
    back: "Zurück",
    continue: "Fortfahren"
  }
};

class ButtonBar extends Component {
  render() {
    return (
      <Fragment>
        <Row className="padding-h-15">
            <Col xs="4" className="padding-h-5">
              <Button color="secondary" size="lg" onClick={this.props.onBackClick} block>
              {strings[this.props.language].back}
              </Button>
            </Col>
            <Col xs="8" className="padding-h-5">
              <Button color="primary" size="lg" onClick={this.props.onContinueClick} block>
              {strings[this.props.language].continue}
              </Button>
            </Col>
          </Row>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    language: state.language
  };
};

ButtonBar.propTypes = {
  onBackClick: PropTypes.func,
  onContinueClick: PropTypes.func,
  language: PropTypes.string
};

export default connect(mapStateToProps)(ButtonBar);
