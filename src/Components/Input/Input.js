import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Input.scss';

class Input extends Component {
  static propTypes = {
    placeHolder: PropTypes.string,
  }
  
  render() {
    const { placeHolder } = this.props;
    return (
       <input
        className={"inputPost"}
        type="text"
        placeholder={ placeHolder }/>
    );
  }
}

export default Input;
