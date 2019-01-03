import axios from 'axios';

const initialState = {
  user: {}
};

// action type
const GET_USER = 'GET_USER';

// action creator
const gotMe = user => ({
  type: GET_USER,
  user
});

// thunk creators
export const getMe = () => dispatch => {
  return axios
    .get('/auth/me')
    .then(res => res.data)
    .then(user => dispatch(gotMe(user)))
    .catch(console.error.bind(console));
};

export const login = formData => dispatch => {
  return axios
    .put('/auth/login', formData)
    .then(res => res.data)
    .then(user => dispatch(gotMe(user)))
    .catch(console.error.bind(console));
};

export const logout = () => dispatch => {
  return axios
    .delete('/auth/logout')
    .then(() => dispatch(gotMe(initialState.user)))
    .catch(console.error.bind(console));
};

// reducer
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        user: action.user
      };
    default:
      return state;
  }
};

export default userReducer;
