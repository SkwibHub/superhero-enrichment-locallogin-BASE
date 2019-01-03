import axios from 'axios';
import listSorter from './listSorter';

// action types
const GET_HERO_LIST = 'GET_HERO_LIST';
const GET_SINGLE_HERO = 'GET_SINGLE_HERO';

// action creators
const getHeroList = heroList => ({
  type: GET_HERO_LIST,
  heroList
});

const getSingleHero = singleHero => ({
  type: GET_SINGLE_HERO,
  singleHero
});

// thunk creators
export const heroThunk = () => {
  return async dispatch => {
    let tempResponse = await axios.get('/api/hero');
    let response = listSorter(tempResponse.data, 'alias');
    const action = getHeroList(response);
    dispatch(action);
  };
};

export const singleHeroThunk = id => {
  return async dispatch => {
    const response = await axios.get(`/api${id}`);
    const action = getSingleHero(response.data);
    dispatch(action);
  };
};

export const addNewHeroThunk = hero => {
  return async dispatch => {
    await axios.post(`api/hero/add`, hero);
    let tempResponse = await axios.get('/api/hero');
    let response = listSorter(tempResponse.data, 'alias');
    const action = getHeroList(response);
    dispatch(action);
  };
};

export const removeHeroThunk = id => {
  return async dispatch => {
    await axios.delete(`/api/hero/${id}`);
    let tempResponse = await axios.get('/api/hero');
    let response = listSorter(tempResponse.data, 'alias');
    const action = getHeroList(response);
    dispatch(action);
  };
};

export const updateHeroThunk = (hero, id) => {
  return async dispatch => {
    await axios.put(`/api/hero/${id}`, hero);
    const response = await axios.get(`/api/hero/${id}`);
    const action = getSingleHero(response.data);
    dispatch(action);
  };
};

// reducer
const initialState = [];

const heroReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_HERO_LIST:
      return action.heroList;
    case GET_SINGLE_HERO:
      return action.singleHero;
    default:
      return state;
  }
};

export default heroReducer;
