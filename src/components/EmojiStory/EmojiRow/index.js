import React, { Component } from "react";
import PropTypes from "prop-types";
import "./index.css";

// Import Bootstrap Components
import { Row } from "reactstrap";

class EmojiRow extends Component {
  render() {
    const emojiPath = "/emojis/"
    return (
      <Row className="emojis justify-content-center">
        <div className="emojiBackground">
          <img
            src={emojiPath + this.props.emojiIcon_1}
            ref={img => this.img_1 = img}
            onError={() => (this.img_1.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7")}
            alt="Emoji 1"
          />
        </div>
        <div className="emojiBackground">
          <img
            src={emojiPath +  this.props.emojiIcon_2}
            ref={img => this.img_2 = img}
            onError={() => (this.img_2.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7")}
            alt="Emoji 2"
          />
        </div>

        <div className="emojiBackground">
          <img
            src={emojiPath +  this.props.emojiIcon_3}
            ref={img => this.img_3 = img}
            onError={() => (this.img_3.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7")}
            alt="Emoji 3"
          />
        </div>

        <div className="emojiBackground margin-0">
          <img
            src={emojiPath +  this.props.emojiIcon_4}
            ref={img => this.img_4 = img}
            onError={() => (this.img_4.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7")}
            alt="Emoji 4"
          />
        </div>
      </Row>
    );
  }
}

EmojiRow.propTypes = {
  emojiIcon_1: PropTypes.string,
  emojiIcon_2: PropTypes.string,
  emojiIcon_3: PropTypes.string,
  emojiIcon_4: PropTypes.string
};

export default EmojiRow;
