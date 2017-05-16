import * as React from 'react';
import Header from './Header';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers/reducers'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './Home'
import SlideshowContainer from '../containers/SlideshowContainer'

export const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);
store.subscribe(() => console.log(store.getState()))

const App = () => (
  <Provider store={store}>
    <Router>
      <div>
        <Header />
        <Route exact path="/" component={Home} />
        <Route path="/slideshows/:id/slides/:index" component={SlideshowContainer} />
      </div>
    </Router>
  </Provider>
);

export default App;