import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './TextPost.scss';

class TextPost extends Component {
  render() {
    return (
      <section className="containerTextPost">
        <p className="TextPost">{this.props.text}</p>
      </section>
    );
  }
}
export default TextPost;