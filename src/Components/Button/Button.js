import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Button.scss';

class Button extends Component {
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
    const { text, loading } = this.props;
    return (
      <button className="Button" type="button">
          {text}
          {loading &&
            <p>Cargando ...</p>
          }
      </button>
    );
  }
}

export default Button;
