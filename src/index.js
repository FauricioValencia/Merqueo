import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import logger from "redux-logger";

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import reducer from './store/reducers/index';

const logger_personal = ({ dispatch, getState }) => next => action => {
    console.log("estado anterios: ", getState());
    console.log("enviando accion: ", action);
    const result = next(action);
    console.log("nueva accion: ", getState());
    return result;
  };
  const store = createStore(
    reducer,
    {},
    applyMiddleware(logger_personal, logger, thunk)
  );
export const Merqueo =()=>{
   return (
    <Provider store={store}>
                <App />
    </Provider>
   )
}

ReactDOM.render(<App />, document.getElementById('root'));


serviceWorker.unregister();
