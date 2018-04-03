import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers } from 'redux'; //deconstructing
import { Provider } from 'react-redux'; //this provides the redux store to the redux application

//reducers always have to return something
const firstReducer = (state = 0, action) => {
  if (action.type === 'BUTTON-ONE') {
    console.log('first reducer state', state)
    return state + 1;
    //state is whatever it returned the last time it went through that reducer
    //each reducer is individual to itself
  }
  return state;
};

const secondReducer = (state = 100, action) => {
  if (action.type === 'BUTTON-TWO') {
    console.log('Second reducer state', state);
    return state - 1;
  }
  return state;
}

const elementList = (state = [], action) => {
  switch(action.type) {
    case 'ADD-ELEMENT':
      return [...state, action.payload];
    case 'CLEAR-ELEMENT-LIST':
      return [];
    default:
      return state;
  }
  // console.log('the new element was');
  // return 3;
}


//this is creating the store
//the store is the big JS object that holds all of the information for our application
const storeInstance = createStore(
  combineReducers({
    firstReducer,
    secondReducer,
    elementList,
  })
  // () => {
  //   console.log('heyo, I am a reducer');
  //this function is our first reducer
  //a reducer is a function that runs everytime an action is dispatched
  //redux only allows for one reducer in the createStore
  // },
  // () => {
  //   console.log('I am another reducer');
  // }
);

//Wrap the application with the Provider component, provide the store to the React application like passing props
ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
