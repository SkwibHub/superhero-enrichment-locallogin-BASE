import axios from 'axios';
import listSorter from './listSorter';

// action types
const GET_UNIVERSE_LIST = 'GET_UNIVERSE_LIST';
const GET_SINGLE_UNIVERSE = 'GET_SINGLE_UNIVERSE';

// action creators
const getUniverseList = universeList => ({
  type: GET_UNIVERSE_LIST,
  universeList
});

const getSingleUniverse = singleUniverse => ({
  type: GET_SINGLE_UNIVERSE,
  singleUniverse
});

// thunk creators
export const universeThunk = () => {
  return async dispatch => {
    let tempResponse = await axios.get('/api/universe');
    let response = listSorter(tempResponse.data, 'universeName');
    const action = getUniverseList(response);
    dispatch(action);
  };
};

export const singleUniverseThunk = id => {
  return async dispatch => {
    const tempResponse = await axios.get(`/api${id}`);
    let sortedRoster = listSorter(tempResponse.data.heroKey, 'alias');
    let response = Object.assign({}, tempResponse.data, {
      heroKey: sortedRoster
    });
    const action = getSingleUniverse(response);
    dispatch(action);
  };
};

export const addNewUniverseThunk = team => {
  return async dispatch => {
    await axios.post(`api/universe/add`, team);
    let tempResponse = await axios.get('/api/universe');
    let response = listSorter(tempResponse.data, 'universeName');
    const action = getUniverseList(response);
    dispatch(action);
  };
};

export const removeUniverseThunk = id => {
  return async dispatch => {
    await axios.delete(`/api/universe/${id}`);
    let tempResponse = await axios.get('/api/universe');
    let response = listSorter(tempResponse.data, 'universeName');
    const action = getUniverseList(response);
    dispatch(action);
  };
};

export const updateUniverseThunk = (universe, id) => {
  return async dispatch => {
    console.log('THUNK ID:', id);
    await axios.put(`/api/universe/${id}`, universe);
    const response = await axios.get(`/api/universe/${id}`);
    const action = getSingleUniverse(response.data);
    dispatch(action);
  };
};

// reducer
const initialState = [];

const universeReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_UNIVERSE_LIST:
      return action.universeList;
    case GET_SINGLE_UNIVERSE:
      return action.singleUniverse;
    default:
      return state;
  }
};

export default universeReducer;
