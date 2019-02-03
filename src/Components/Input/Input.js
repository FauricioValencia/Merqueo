import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Input.scss';

class Input extends Component {
  static propTypes = {
    _handleclick: PropTypes.func,
    text: PropTypes.string,
    loading: PropTypes.bool
  }
  static defaultProps = {
    _handleclick: () => {},
    text: "",
    loading: false
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
