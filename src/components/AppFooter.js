import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

class AppFooter extends Component {
  render() {
    return (
      <Fragment>
         {this.props.children}
      </Fragment>
    );
  }
}

AppFooter.propTypes = {
  children: PropTypes.any
};

export default AppFooter;
