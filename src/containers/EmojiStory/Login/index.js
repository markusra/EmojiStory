import React, { Component } from "react";
import PropTypes from "prop-types";
import "./index.css";

import EmojiContainer from "../../../components/EmojiStory/EmojiContainer";
import LoginOverlay from "../../../components/LoginOverlay";
import EmojiBody from "../../../components/EmojiStory/EmojiContainer/EmojiBody";
import EmojiFooter from "../../../components/EmojiStory/EmojiContainer/EmojiFooter";
import EmojiRow from "../../../components/EmojiStory/EmojiRow";

import history from "../../../history";

// Connect to Redux store
import { connect } from "react-redux";

import { redirectUser } from "../../../services/redirectUser";

// Import Bootstrap Components
import { Button, Row } from "reactstrap";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      emojis: [],
      loginOverlay: false,
      attemptsLeft: 3
    };

    this.onTryAgainButtonClick = this.onTryAgainButtonClick.bind(this);
  }

  componentWillMount() {
    redirectUser(this.props.userProgress);
  }

  onDeleteButtonClick() {
    var tempArray = this.state.emojis.slice();
    tempArray.pop();
    this.setState({ emojis: tempArray });
  }

  onEmojiButtonClick(id) {
    if (this.state.emojis.length === 3) {
      const attempts = this.state.attemptsLeft - 1;
      this.setState({ attemptsLeft: attempts, loginOverlay: true });
    }

    var tempArray = this.state.emojis.slice();
    tempArray.push(this.props.keyboard[id].src);
    this.setState({ emojis: tempArray });
  }

  onTryAgainButtonClick() {
    this.setState({ emojis: [], loginOverlay: false });
  }

  onContinueButtonClick() {
    history.push("/survey");
  }

  isCorrectPassword() {
    return false;
  }

  render() {
    const emojiPath = "/emojis/";
    return (
      <EmojiContainer>
        <LoginOverlay
          visible={this.state.loginOverlay}
          isCorrect={this.isCorrectPassword()}
          attemptsLeft={this.state.attemptsLeft}
          onTryAgainButtonClick={this.onTryAgainButtonClick}
          onContinueButtonClick={this.onContinueButtonClick}
        />
        <EmojiBody>
          <div className="flexContainer">
            <div className="passwordContainer">
              <EmojiRow
                emojiIcon_1={this.state.emojis[0]}
                emojiIcon_2={this.state.emojis[1]}
                emojiIcon_3={this.state.emojis[2]}
                emojiIcon_4={this.state.emojis[3]}
              />
            </div>

            <div className="keyboard">
              <Row className="emojisKeyboardRow justify-content-center">
                <Button
                  color="default"
                  className="emojiKeyboardBackground"
                  onClick={() => this.onEmojiButtonClick(0)}
                >
                  <img
                    src={emojiPath + this.props.keyboard[0].src}
                    draggable="false"
                    alt="Emoji 1"
                  />
                </Button>
                <Button
                  color="default"
                  className="emojiKeyboardBackground"
                  onClick={() => this.onEmojiButtonClick(1)}
                >
                  <img
                    src={emojiPath + this.props.keyboard[1].src}
                    draggable="false"
                    alt="Emoji 2"
                  />
                </Button>
                <Button
                  color="default"
                  className="emojiKeyboardBackground margin-0"
                  onClick={() => this.onEmojiButtonClick(2)}
                >
                  <img
                    src={emojiPath + this.props.keyboard[2].src}
                    draggable="false"
                    alt="Emoji 3"
                  />
                </Button>
              </Row>
              <Row className="emojisKeyboardRow justify-content-center">
                <Button
                  color="default"
                  className="emojiKeyboardBackground"
                  onClick={() => this.onEmojiButtonClick(3)}
                >
                  <img
                    src={emojiPath + this.props.keyboard[3].src}
                    draggable="false"
                    alt="Emoji 4"
                  />
                </Button>
                <Button
                  color="default"
                  className="emojiKeyboardBackground"
                  onClick={() => this.onEmojiButtonClick(4)}
                >
                  <img
                    src={emojiPath + this.props.keyboard[4].src}
                    draggable="false"
                    alt="Emoji 5"
                  />
                </Button>
                <Button
                  color="default"
                  className="emojiKeyboardBackground margin-0"
                  onClick={() => this.onEmojiButtonClick(5)}
                >
                  <img
                    src={emojiPath + this.props.keyboard[5].src}
                    draggable="false"
                    alt="Emoji 6"
                  />
                </Button>
              </Row>
              <Row className="emojisKeyboardRow justify-content-center">
                <Button
                  color="default"
                  className="emojiKeyboardBackground"
                  onClick={() => this.onEmojiButtonClick(6)}
                >
                  <img
                    src={emojiPath + this.props.keyboard[6].src}
                    draggable="false"
                    alt="Emoji 7"
                  />
                </Button>
                <Button
                  color="default"
                  className="emojiKeyboardBackground"
                  onClick={() => this.onEmojiButtonClick(7)}
                >
                  <img
                    src={emojiPath + this.props.keyboard[7].src}
                    draggable="false"
                    alt="Emoji 8"
                  />
                </Button>
                <Button
                  color="default"
                  className="emojiKeyboardBackground margin-0"
                  onClick={() => this.onEmojiButtonClick(8)}
                >
                  <img
                    src={emojiPath + this.props.keyboard[8].src}
                    draggable="false"
                    alt="Emoji 9"
                  />
                </Button>
              </Row>
              <Row className="emojisKeyboardRow justify-content-center">
                <Button
                  color="default"
                  className="emojiKeyboardBackground"
                  onClick={() => this.onEmojiButtonClick(9)}
                >
                  <img
                    src={emojiPath + this.props.keyboard[9].src}
                    draggable="false"
                    alt="Emoji 10"
                  />
                </Button>
                <Button
                  color="default"
                  className="emojiKeyboardBackground"
                  onClick={() => this.onEmojiButtonClick(10)}
                >
                  <img
                    src={emojiPath + this.props.keyboard[10].src}
                    draggable="false"
                    alt="Emoji 11"
                  />
                </Button>
                <Button
                  color="default"
                  className="emojiKeyboardBackground margin-0"
                  onClick={() => this.onEmojiButtonClick(11)}
                >
                  <img
                    src={emojiPath + this.props.keyboard[11].src}
                    draggable="false"
                    alt="Emoji 12"
                  />
                </Button>
              </Row>
            </div>

            <div className="deleteButtonContainer">
              <Button
                className="deleteButton"
                color="danger"
                size="lg"
                onClick={() => this.onDeleteButtonClick()}
                block
              >
                Delete
              </Button>
            </div>
          </div>
        </EmojiBody>
      </EmojiContainer>
    );
  }
}

const mapStateToProps = state => {
  return {
    userProgress: state.userProgress,
    keyboard: state.keyboard
  };
};

Login.propTypes = {
  userProgress: PropTypes.string,
  keyboard: PropTypes.array
};

export default connect(mapStateToProps)(Login);
