import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

// CUSTOM COMPONENTS
import styles from  './CreateState.scss';


import Button from '../../Components/Button/Button';
import Input from '../../Components/Input/Input';
import texts from  '../../Locales/Merqueo.locales';


const cx = classNames.bind(styles);

class CreateState extends Component {


  constructor(props) {
    super(props);
    this.state={
      
    };
  }
 
  
  render() {
    const { isloading } = this.state;
    return (
     <section className={cx('Container-Create-State')}>
        <div className="containerCard">
          <div className="containerInput">
            <Input placeHolder={texts.es.typeState}/>
          </div>
          <div className="containerButton">
            <Button _handleclick={()=>this.click()} loading={isloading} text={texts.es.text} />
          </div>        
        </div>
     </section>
    );
  }
}

export default CreateState;
