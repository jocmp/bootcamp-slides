import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

export const slideshow = (state: any, action: any) => {
  switch(action.type) {
    case 'LOAD_SLIDESHOW':
      return {
        slideshow: action.slideshow
      }
    default:
      return {};
  }
}

export const store = createStore(slideshow, applyMiddleware(thunk));
store.subscribe(() => console.log(store.getState()))

ReactDOM.render(
  <App store={store} />,
  document.getElementById('root') as HTMLElement
);
