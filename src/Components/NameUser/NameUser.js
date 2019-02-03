import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './NameUser.scss';

class NameUser extends Component {
  render() {
    const { name, time } = this.props;
    return (
      <section className="containerData">
        <p className="nameUser">{name}</p>
        <p className="timePublication">Hace {time}</p>
      </section>
    );
  }
}
export default NameUser;