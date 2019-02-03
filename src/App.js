// DEPENDENCIES
import React, { Component } from 'react';
import classNames from 'classnames/bind';
// CUSTOM COMPONENTS
// import Button from 'Components/Button/Button';
// import Input from './Components/Input/Input';
// import logo from './logo.svg';
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
      publications:[
        {
          name:'Juan Rodriguez',
          time:'40 minutos',
          likes: 12,
          publication:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
          comments:[
            {
              name: 'Elena',
              comment: 'Lorem lipson 1',
              time: '3 dias'
            },
            {
              name: 'Jose',
              comment: 'Lorem lipson 2',
              time: '2 dias'
            },
            {
              name: 'Eduardo',
              comment: 'Lorem lipson 3',
              time: '1 dias'
            }
          ]
        }
      ]
    };
  }
  render() {
    // const { publications, } = this.state;
    return (
      <div className={cx('App')}>
        <header className="App-header">
        <CreateState/>
        </header>
        <div className="App-body">
          <Post
            data={this.state.publications}
          />
        </div>
      </div>
    );
  }
}

export default App;
