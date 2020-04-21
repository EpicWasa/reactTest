import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Custom from "./react_modules/custom";
import TeaList from "./react_modules/teaList";
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {createStore, applyMiddleware} from "redux";
import mainReducer from './reducers/index';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

const middlewares = [thunk];
let initialState ={products:[], sorts:[]};

let store = createStore(mainReducer , initialState, applyMiddleware(...middlewares));

const style = {
    color: "white",
    backgroundColor: "rgba(0,255,255, 0.25)",
    padding: "10px",
    fontFamily: "Arial",
    height: "40px",
};

ReactDOM.render((
  <BrowserRouter>
      <Provider store={store}>
      <App style = {style} >
        <Switch>
            <Route exact path = '/' component = {TeaList} />
            <Route  path = '/create' render={(props)=> <Custom {...props} mode = {'create'} />}  />
            <Route path = '/tea/:id' render={(props)=> <Custom {...props} mode = {'update'} />}  />
        </Switch>
    </App>
      </Provider>
  </BrowserRouter>
    ),document.getElementById('root')
);
serviceWorker.unregister();
