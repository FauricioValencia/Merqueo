import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FaUser } from 'react-icons/fa';

import classNames from 'classnames/bind';

// CUSTOM COMPONENTS
import styles from  './Comments.scss';

import NameUser from '../../Components/NameUser/NameUser';
import TextPost from '../../Components/TextPost/TextPost';
import Button from '../../Components/Button/Button';
import texts from '../../Locales/Merqueo.locales';
// import Button from '../../Components/Button/Button';
// import Input from '../../Components/Input/Input';
// import texts from  '../../Locales/Merqueo.locales';


const cx = classNames.bind(styles);

class Comments extends Component {


  constructor(props) {
    super(props);
    this.state={
      isloading:false
    };
  }
  click=()=>{
    const { isloading } = this.state;
    this.setState({
      isloading: !isloading
    });
  }
  
  render() {
    const { name, comment, time } = this.props.data; 
    return (
     <section className={cx('Container-Comment' )}>
        <div className="Comment">
          <div className="ContiainerUser">
            <FaUser className="sizeUSer"/>
          </div>
          <div className="containerData">
            <div className="dataUser">
              <p className="nameUSer">
                {name}
              </p>
              <p className="commentUSer">
                {comment}
              </p>
            </div>
            <div>
              <p className="timeUSer">
                {time}
              </p>
            </div>
          </div>
        </div>
     </section>
    );
  }
}
export default Comments;
