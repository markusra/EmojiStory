import React, { Component, Fragment } from "react";
import { Button } from "reactstrap";
import history from "../../history";
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
        <div className="">
          <Button
            color="success"
            style={{fontSize: "2rem", height: "100px"}}
            block
            onClick={() => {
              this.setYes();
              history.push("/survey");
            }}
          >
            Yes
          </Button>

          <Button
            color="danger"
            style={{fontSize: "2rem", height: "100px"}}
            block
            onClick={() => {
              this.setNo();
              history.push("/survey");
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
