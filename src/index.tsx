import * as React from 'react';
import * as ReactDOM from 'react-dom';
import createBrowserHistory from 'history/createBrowserHistory' 
import { Router, Route } from 'react-router' 
import App from './components/App';
import './stylesheets/index.scss';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers/reducers'

export const store = createStore(rootReducer, applyMiddleware(thunk));
store.subscribe(() => console.log(store.getState()))


ReactDOM.render(
  <div>
    <Provider store={store}>
      <Router history={createBrowserHistory()}>
        {/*<Route path="/slideshows/:id/slides/:index" component={SlideshowContainer} />*/}
        <Route path="/" component={App} />
      </Router>
    </Provider>  
  </div>,
  document.getElementById('root') as HTMLElement
);
