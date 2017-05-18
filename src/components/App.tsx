import * as React from 'react';
import Header from './Header';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import HomeContainer from '../containers/HomeContainer'
import SlideshowContainer from '../containers/SlideshowContainer'
import { AppState } from '../Models'

const initialState: AppState = {
    slideshow: {
        id: 0,
        title: "",
        slides: []
    },
    viewedIndices: [],
    error: null,
    loading: false
};

export const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(thunk)
);

store.subscribe(() => console.log(store.getState()))

const App = () => (
  <Provider store={store}>
    <Router>
      <div>
        <Header />
        <Route exact path="/" component={HomeContainer} />
        <Route path="/slideshows/:id/slides/:index" component={SlideshowContainer} />
      </div>
    </Router>
  </Provider>
);

export default App;