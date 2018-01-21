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

  componentDidUpdate() {
    console.log(this.state.itBackground);
  }

  render() {
    return (
      <Fragment>
        <div className="row justify-content-center">
          <Button
            color="success"
            style={{marginRight: "100px"}}
            block
            onClick={() => {
              this.setYes();
            }}
          >
            Yes
          </Button>

          <Button
            color="danger"
            block
            onClick={() => {
              this.setNo();
            }}
          >
            No
          </Button>
        </div>
      </Fragment>
    );
  }
}

export default ITBackgroundButtons;
