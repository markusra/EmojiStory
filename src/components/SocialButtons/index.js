import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import "./index.css";
import { connect } from "react-redux";

let strings = {
  en: {
    shareText: "Share this survey"
  },
  no: {
    shareText: "Del denne undersøkelsen"
  },
  de: {
    shareText: "Teile diese Umfrage"
  }
};

class SocialButtons extends Component {
  render() {
    return (
      <Fragment>
        <div className="row social-row justify-content-center">
          <b>{strings[this.props.language].shareText}</b>
        </div>
        <div className="row social-row justify-content-center">
          <a
            href="https://www.facebook.com/sharer/sharer.php?u=https://emojistory.site/"
            className="btn-social btn-facebook"
            rel="noopener noreferrer"
            target="_blank"
          >
            <i className="fa fa-facebook" />
          </a>

          <a
            href="https://plus.google.com/share?url=https://emojistory.site/"
            className="btn-social btn-google-plus"
            rel="noopener noreferrer"
            target="_blank"
          >
            <i className="fa fa-google-plus" />
          </a>

          <a
            href="https://twitter.com/intent/tweet?url=https%3A%2F%2Femojistory.site%2F&via=markusrauhut%20%40makjellevand&text=Can%20emojis%20replace%20passwords%3F%20Take%20this%20survey%20in%20order%20to%20support%20research%20on%20emoji%20passwords.&hashtags=emojis%2C%20passwords%2C%20security%2C"
            className="btn-social btn-twitter"
            rel="noopener noreferrer"
            target="_blank"
          >
            <i className="fa fa-twitter" />
          </a>
          <a
            href="http://reddit.com/submit?url=https://emojistory.site&amp;title=Survey%20on%20Emoji%20Passwords"
            className="btn-social btn-reddit"
            rel="noopener noreferrer"
            target="_blank"
          >
            <i className="fa fa-reddit" />
          </a>

          <a
            href="https://www.linkedin.com/shareArticle?mini=true&url=https%3A//emojistory.site/&title=Survey%20on%20Emoji%20Passwords&summary=&source="
            className="btn-social btn-linkedin"
            rel="noopener noreferrer"
            target="_blank"
          >
            <i className="fa fa-linkedin" />
          </a>
          <a
            href="mailto:mail@emojistory.site?subject=Survey on emoji passwords&amp;body=Can emojis replace passwords? In order to support research on emoji passwords, take this short survey (3-5 minutes): https://emojistory.site."
            className="btn-social btn-email"
            rel="noopener noreferrer"
            target="_blank"
          >
            <i className="fa fa-envelope" />
          </a>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    language: state.language
  };
};

SocialButtons.propTypes = {
  language: PropTypes.string
};

export default connect(mapStateToProps)(SocialButtons);
