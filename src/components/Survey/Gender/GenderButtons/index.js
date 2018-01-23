import React, { Component, Fragment } from "react";
import "./index.css";
import PropTypes from "prop-types";

class GenderButtons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gender: "hei"
    };

    this.setFemale = this.setFemale.bind(this);
    this.setMale = this.setMale.bind(this);
  }

  setFemale() {
    this.setState({
      gender: "female"
    });
  }

  setMale() {
    this.setState({
      gender: "male"
    });
  }

  render() {
    return (
      <Fragment>
        <div className="row justify-content-center">
          <div
            onClick={() => {
              this.props.onFemaleClick();
            }}
          >
            <i
              className="fa fa-female female-styling pointer"
              aria-hidden="true"
            />
          </div>
          <div
            onClick={() => {
              this.props.onMaleClick();
            }}
          >
            <i className="fa fa-male male-styling pointer" aria-hidden="true" />
          </div>
        </div>
      </Fragment>
    );
  }
}

GenderButtons.propTypes = {
  onFemaleClick: PropTypes.func,
  onMaleClick: PropTypes.func
};

export default GenderButtons;
