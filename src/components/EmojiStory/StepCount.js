import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

class StepCount extends Component {
  render() {
    return (
      <Fragment>
        Step {this.props.counter} of {this.props.total}
      </Fragment>
    );
  }
}

StepCount.propTypes = {
  counter: PropTypes.number,
  total: PropTypes.number
};

export default StepCount;
