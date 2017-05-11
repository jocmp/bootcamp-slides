import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from '../src/components/App';
import { createStore } from 'redux'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App store={createStore((state: any, action: any) => state)} />, div);
});