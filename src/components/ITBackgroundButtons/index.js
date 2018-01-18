import React, { Component, Fragment } from "react";
import { Button } from "reactstrap";
import "./index.css";

class ITBackgroundButtons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itBackground: ""
    };

    this.setYes = this.setYes.bind(this);
    this.setNo = this.setNo.bind(this);
  }

  setYes() {
    this.setState({
      itBackground: "yes"
    });
  }

  setNo() {
    this.setState({
      itBackground: "no"
    });
  }

  render() {
    return (
      <Fragment>
        <div className="row justify-content-center">
          <div className="btn-group-vertical">
          <Button
            color="success"
            className="col btn-style2"
            onClick={() => {
              this.setYes();
            }}
          >
            Yes
          </Button>
          <Button
            color="danger"
            className="col"
            onClick={() => {
              this.setNo();
            }}
          >
            No
          </Button>

          </div>
          
        </div>
      </Fragment>
    );
  }
}

export default ITBackgroundButtons;
