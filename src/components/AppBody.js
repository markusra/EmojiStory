import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

class AppBody extends Component {
  render() {
    return (
      <Fragment>
         {this.props.children}
      </Fragment>
    );
  }
}

AppBody.propTypes = {
  children: PropTypes.any
};

export default AppBody;
