import { createStore, combineReducers, applyMiddleware } from 'redux';
import axios from 'axios';
import teamReducer from './reducers/teamReducer';
import heroReducer from './reducers/heroReducer';
import universeReducer from './reducers/universeReducer';
import userReducer from './reducers/userReducer';
import loggingMiddleware from 'redux-logger'; // https://github.com/evgenyrodionov/redux-logger
import thunkMiddleware from 'redux-thunk'; // https://github.com/gaearon/redux-thunk

const rootReducer = combineReducers({
  team: teamReducer,
  hero: heroReducer,
  universe: universeReducer,
  user: userReducer
});

export default createStore(
  rootReducer,
  applyMiddleware(
    // `withExtraArgument` gives us access to axios in our async action creators!
    // https://github.com/reduxjs/redux-thunk#injecting-a-custom-argument
    thunkMiddleware.withExtraArgument({ axios }),
    loggingMiddleware
  )
);
