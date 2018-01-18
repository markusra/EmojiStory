import React, { Component, Fragment } from "react";
import "./index.css";
import PropTypes from "prop-types";

// Import Bootstrap Components
import { Button, Row, Col } from "reactstrap";

class ButtonBar extends Component {
  render() {
    return (
      <Fragment>
        <Row className="padding-h-15">
            <Col xs="4" className="padding-h-5">
              <Button color="secondary" size="lg" onClick={this.props.onBackClick} block>
                Back
              </Button>
            </Col>
            <Col xs="8" className="padding-h-5">
              <Button color="primary" size="lg" onClick={this.props.onContinueClick} block>
                Continue
              </Button>
            </Col>
          </Row>
      </Fragment>
    );
  }
}

ButtonBar.propTypes = {
  onBackClick: PropTypes.func,
  onContinueClick: PropTypes.func
};

export default ButtonBar;
