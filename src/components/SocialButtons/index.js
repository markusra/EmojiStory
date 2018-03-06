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
    shareText: ""
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
            >
              <i className="fa fa-facebook" />
            </a>

            <a
              href="https://plus.google.com/share?url=https://emojistory.site/"
              className="btn-social btn-google-plus"
            >
              <i className="fa fa-google-plus" />
            </a>

            <a
              href="https://twitter.com/home?status=Can%20emojis%20replace%20passwords?%20Take%20this%20survey%20to%20help%20the%20research%20on%20emoji-based%20authentication!%20Go%20to%20emojistory.site!"
              className="btn-social btn-twitter"
            >
              <i className="fa fa-twitter" />
            </a>
            <a href="https://emoji.rauhut.no" className="btn-social btn-reddit">
              <i className="fa fa-reddit" />
            </a>

            <a
              href="https://www.linkedin.com/shareArticle?mini=true&url=https%3A//emojistory.site/&title=Emoji-Based%20Authentication&summary=&source="
              className="btn-social btn-linkedin"
            >
              <i className="fa fa-linkedin" />
            </a>
            <a
              href="mailto:mail@emojistory.site?subject=Emoji-Based Authentication&amp;body=Check out this site https://emojistory.site/."
              className="btn-social btn-email"
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
