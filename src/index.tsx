import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './components/App';
import './stylesheets/index.scss';
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers/reducers'

export const store = createStore(rootReducer, applyMiddleware(thunk));
store.subscribe(() => console.log(store.getState()))

ReactDOM.render(
  <App store={store} />,
  document.getElementById('root') as HTMLElement
);
