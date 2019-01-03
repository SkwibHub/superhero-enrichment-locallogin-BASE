import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
  HashRouter as Router,
  Route,
  Switch,
  withRouter
} from 'react-router-dom';

import store from './store';
import { getMe } from './reducers/userReducer.js';
import Root from './components/root';
import LoginPage from './components/LoginPage.js';

const Main = withRouter(
  class extends Component {
    componentDidMount() {
      store.dispatch(getMe()).then(() => {
        this.props.history.push('/');
      });
    }

    render() {
      return (
        <Switch>
          <Route path='/hero' component={Root} />
          <Route path='/team' component={Root} />
          <Route path='/universe' component={Root} />
          <Route path='/' component={LoginPage} />
        </Switch>
      );
    }
  }
);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Main />
    </Router>
  </Provider>,
  document.getElementById('main')
);
