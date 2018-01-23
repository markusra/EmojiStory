import React, { Component, Fragment } from "react";
import { Button } from "reactstrap";
import "./index.css";
import PropTypes from "prop-types";

class ITBackgroundButtons extends Component {

  render() {
    return (
      <Fragment>
        <div className="it-background">
          <Button
            color="success"
            style={{fontSize: "2rem", height: "100px"}}
            block
            onClick={() => {
              this.props.onYesClick();
            }}
          >
            Yes
          </Button>

          <Button
            color="danger"
            style={{fontSize: "2rem", height: "100px"}}
            block
            onClick={() => {
              this.props.onNoClick();
            }}
          >
            No
          </Button>
        </div>
       </Fragment>
    );
  }
}

ITBackgroundButtons.propTypes = {
  onYesClick: PropTypes.func,
  onNoClick: PropTypes.func
};

export default ITBackgroundButtons;
