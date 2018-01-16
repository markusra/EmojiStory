import React, { Component, Fragment } from "react";
import "./index.css";

// Import Bootstrap Components
import { Button, Row, Col } from "reactstrap";

class ButtonBar extends Component {
  render() {
    return (
      <Fragment>
        <Row className="padding-h-15">
            <Col xs="4" className="padding-h-5">
              <Button color="secondary" size="lg" href="/" block>
                Back
              </Button>
            </Col>
            <Col xs="8" className="padding-h-5">
              <Button color="primary" size="lg" href="/finish" block>
                Continue
              </Button>
            </Col>
          </Row>
      </Fragment>
    );
  }
}

export default ButtonBar;
