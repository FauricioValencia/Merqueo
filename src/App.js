// DEPENDENCIES
import React, { Component } from 'react';
import classNames from 'classnames/bind';

// Redux
import { connect } from "react-redux";

import styles from './App.scss';
// import texts from 'Locales/Merqueo.locales';
import CreateState from './FatherComponents/CreateState/CreateState';
import Post from './FatherComponents/Post/Post';
const cx = classNames.bind(styles);

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      isloading:false,
      publications:[]
    };
  }
  componentDidMount=()=>{
    const { publications } = this.props;
    this.setState({publications})
  }
  render() {
    const { publications } = this.state;
    return (
      <div className={cx('App')}>
        <header className="App-header">
        <CreateState/>
        </header>
        <div className="App-body">
          <Post
            data={Array.isArray(publications) && publications.length>0 && publications}
          />
        </div>
      </div>
    );
  }
}



const mapStateToProps = (state, props) => {

  return {
     publications: state.publication.publications
  };
};
// const mapDispatchToProps = {
//   getDataApiOrderAsync,
// };

export default connect(
    mapStateToProps,
    null
    )(App);
