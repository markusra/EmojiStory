import React, { Component } from "react";
import PropTypes from "prop-types";

class AppFooter extends Component {
  render() {
    return (
      <div className={"app-footer"}>
         {this.props.children}
      </div>
    );
  }
}

AppFooter.propTypes = {
  children: PropTypes.any
};

export default AppFooter;
