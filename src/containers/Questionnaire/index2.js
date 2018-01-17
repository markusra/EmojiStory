import React, { Component } from "react";
import { Button } from 'reactstrap';
import Example from "./form";
import AppContainer from "../../components/AppContainer";
import AppBody from "../../components/AppBody";
import AppFooter from "../../components/AppFooter";
import PropTypes from "prop-types";

class Test extends Component {
  render() {
    return (
      <AppContainer appTitle="Survey – Emoji-Based Authentication">
        <AppBody>
          <Example ref={instance => { this.child = instance; }} />
        </AppBody>
        <AppFooter>
          <Button color="success" className="col" onClick={() => { this.child.handleSubmit(); }} >
            Submit
          </Button>
        </AppFooter>

      </AppContainer>
    );
  }
}

Test.propTypes = {
  email: PropTypes.string,
  storeInDB: PropTypes.func,
}

export default Test;

