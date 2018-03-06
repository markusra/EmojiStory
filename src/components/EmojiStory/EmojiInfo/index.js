import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

import EmojiContainer from "../../../components/EmojiStory/EmojiContainer";
import EmojiBody from "../../../components/EmojiStory/EmojiContainer/EmojiBody";
import EmojiFooter from "../../../components/EmojiStory/EmojiContainer/EmojiFooter";
import "./index.css";

// Import Bootstrap Components
import { Button } from "reactstrap";

// Connect to Redux store
import { connect } from "react-redux";

import { setTimestamp1 } from "../../../actions/index";
import { createTimestamp } from "../../../services/timestamping";

let strings = {
  en: {
    title: "Instructions",
    step1: (
      <Fragment>
        You will now create your own{" "}
        <span className="yellow">emoji-password</span>.
      </Fragment>
    ),
    step2: (
      <Fragment>
        You do this by <span className="yellow">inserting words</span> into a{" "}
        <span className="yellow">story</span>. The story does not have to be
        true.
      </Fragment>
    ),
    step3: (
      <Fragment>
        The words you insert <span className="yellow">correspond</span> to
        various emojis.
      </Fragment>
    ),
    step4: (
      <Fragment>
        Finally, you end up with <span className="yellow">four emojis</span>{" "}
        which form your emoji-password.
      </Fragment>
    ),
    next: "Next",
    continue: "Continue"
  },
  no: {
    title: "Instruksjoner",
    step1: (
      <Fragment>
        Du vil nå opprette ditt eget{" "}
        <span className="yellow">emoji-passord</span>.
      </Fragment>
    ),
    step2: (
      <Fragment>
        Dette gjør du ved å <span className="yellow">sette inn ord</span> i en{" "}
        <span className="yellow">historie</span>. Historien trenger ikke å være
        sann.
      </Fragment>
    ),
    step3: (
      <Fragment>
        Ordene du setter inn <span className="yellow">tilsvarer</span>{" "}
        forskjellige emojis.
      </Fragment>
    ),
    step4: (
      <Fragment>
        Til slutt ender du opp med <span className="yellow">fire emojis</span>{" "}
        som danner emoji-passordet ditt.
      </Fragment>
    ),
    next: "Neste",
    continue: "Fortsett"
  },
  de: {
    title: "Anleitung",
    step1: (
      <Fragment>
        Du wirst nun dein eigenes <span className="yellow">Emoji-Passwort</span>{" "}
        erstellen.
      </Fragment>
    ),
    step2: (
      <Fragment>
        Als erstes fügst du <span className="yellow">Wörter</span> in eine{" "}
        <span className="yellow">Geschichte</span> ein. Die Geschichte muss
        nicht unbedingt einen Sinn ergeben.
      </Fragment>
    ),
    step3: (
      <Fragment>
        Die eingefügten Wörter <span className="yellow">symbolisieren</span>{" "}
        verschiedene Emojis.
      </Fragment>
    ),
    step4: (
      <Fragment>
        Letztendlich hast du <span className="yellow">vier Emojis</span>{" "}
        generiert. Diese bilden dein Emoji-Passwort.
      </Fragment>
    ),
    next: "Weiter",
    continue: "Fortfahren"
  }
};

class EmojiInfo extends Component {
  componentWillMount() {
    const timestamp = createTimestamp();
    // Set first timestamp for time spent on the "instructions page"
    this.props.setTimestamp1(timestamp);
    this.props.infoList.push(
      <li key={this.props.clicks}>{strings[this.props.language].step1}</li>
    );
  }

  addInstructions(infoList, clicks, liStyle) {
    if (clicks === 1) {
      infoList.pop();
      infoList.push(
        <li key={clicks - 1} style={liStyle}>
          {strings[this.props.language].step1}
        </li>,
        <li key={clicks}>{strings[this.props.language].step2}</li>
      );
    }
    if (clicks === 2) {
      infoList.pop();
      infoList.push(
        <li key={clicks - 1} style={liStyle}>
          {strings[this.props.language].step2}
        </li>,
        <li key={clicks}>{strings[this.props.language].step3}</li>
      );
    }
    if (clicks === 3) {
      infoList.pop();
      infoList.push(
        <li key={clicks - 1} style={liStyle}>
          {strings[this.props.language].step3}
        </li>,
        <li key={clicks}>{strings[this.props.language].step4}</li>
      );
    }
    return infoList;
  }

  render() {
    const liStyle = {
      opacity: "0.3"
    };

    const instructions = this.addInstructions(
      this.props.infoList,
      this.props.clicks,
      liStyle
    );

    return (
      <EmojiContainer appTitle="Creating an emoji-password">
        <EmojiBody>
          <div className="instructionHeader">
            {" "}
            {strings[this.props.language].title}
          </div>
          <div className="instructionList">
            <ul>{instructions}</ul>
          </div>
        </EmojiBody>
        <EmojiFooter>
          {this.props.clicks < 3 && (
            <Button
              color="primary"
              size="lg"
              onClick={this.props.onContinueClick}
              block
            >
              {strings[this.props.language].next}
            </Button>
          )}
          {this.props.clicks === 3 && (
            <Button
              color="success"
              size="lg"
              onClick={this.props.onContinueClick}
              block
            >
              {strings[this.props.language].continue}
            </Button>
          )}
        </EmojiFooter>
      </EmojiContainer>
    );
  }
}

const mapStateToProps = state => {
  return {
    timestamp1: state.timestamp1,
    language: state.language
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setTimestamp1: timestamp1 => {
      dispatch(setTimestamp1(timestamp1));
    }
  };
};

EmojiInfo.propTypes = {
  onContinueClick: PropTypes.func,
  clicks: PropTypes.number,
  infoList: PropTypes.array,
  timestamp1: PropTypes.number,
  setTimestamp1: PropTypes.func,
  language: PropTypes.string
};

export default connect(mapStateToProps, mapDispatchToProps)(EmojiInfo);
