import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FaUser } from 'react-icons/fa';

import classNames from 'classnames/bind';

// CUSTOM COMPONENTS
import styles from  './Post.scss';
import Input from '../../Components/Input/Input';
import NameUser from '../../Components/NameUser/NameUser';
import TextPost from '../../Components/TextPost/TextPost';
import Button from '../../Components/Button/Button';
import texts from '../../Locales/Merqueo.locales';
import Comments from '../Comments/Comments';


const cx = classNames.bind(styles);

class Post extends Component {


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
    const { data } = this.props;
    return (
      <div>
      {
        Array.isArray(data) && data.length>0 &&
        data.map((item,index) =>
        {
        const { name, time, publication, likes, comments} = item;
        return(
        <section 
          key={index}
          className={cx('Container-Post')}>
        <div className="containerCard">
            <div className="containerImagePerfil">
                <FaUser className="sizeUser"/>
            </div>
            <div className="ContainerDataPost">
              <div className="containerDataUser">
                <NameUser
                  name={ name }
                  time={ time }
                  />
              </div>
              <div className="containerTextPost">
                <TextPost
                  text={publication}
                  />
              </div>
              <div className="containerButton">
                <Button
                  text={texts.es.reaction}
                  />
                <Button
                  text={texts.es.commet}
                  />
              </div>
            </div>
        </div>
        <div className="containerCountCommentsReactions">
          <div className="counts">
            <p>{likes}</p>
            <p> {comments.length} comentarios</p>
          </div>
        </div>
          {Array.isArray(comments) && comments.length > 0 &&
            comments.map((item)=>(
              <Comments
                data={item}
              />
            ))
          }
          <Input
            placeHolder={texts.es.typeComment}
            />
     </section>
        )
        }
        )
                }
     </div>

    );
  }
}
export default Post;
