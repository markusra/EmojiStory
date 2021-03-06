import React, { Component } from "react";
import PropTypes from "prop-types";

class AppBody extends Component {
  render() {
    return (
      <div className={"app-body"}>
         {this.props.children}
      </div>
    );
  }
}

AppBody.propTypes = {
  children: PropTypes.any
};

export default AppBody;
