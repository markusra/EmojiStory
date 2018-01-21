import React, { Component, Fragment } from "react";
import history from "../../history";
import "./index.css";


class GenderButtons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gender: ""
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

  componentDidUpdate() {
    console.log(this.state.gender);
  }

  render() {
    return (
      <Fragment>
        <div className="row justify-content-center">
          <div
            onClick={() => {
              this.setFemale();
              history.push("/itbackground");
            }}
          >
            <i
              className="fa fa-female female-styling pointer"
              aria-hidden="true"
            />
          </div>
          <div
            onClick={() => {
              this.setMale();
              history.push("/itbackground");
            }}
          >
            <i className="fa fa-male male-styling pointer" aria-hidden="true" />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default GenderButtons;
