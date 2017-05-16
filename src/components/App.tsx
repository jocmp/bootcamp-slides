import * as React from 'react';
import Header from './Header';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import createHistory from 'history/createBrowserHistory'
import thunk from 'redux-thunk'
import rootReducer from '../reducers/reducers'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'
import Home from './Home'
import Slides from './Slides'
import SlideshowContainer from '../containers/SlideshowContainer'

const history = createHistory();

export const store = createStore(rootReducer,
  applyMiddleware(routerMiddleware(history)));
store.subscribe(() => console.log(store.getState()))

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/slideshows/:id/slides/:index" component={SlideshowContainer} />
      <Route path="/#/a" component={Slides} />
    </div>
  </Router>
);

export default App;