import * as React from 'react';
import { Router, Route, } from 'react-router' 
import { createBrowserHistory } from 'history' 
import Header from './Header';
import Slideshow from './Slideshow'

class App extends React.Component<{}, null> {
  render() {
    return (
      <div className="App">
        <Header />
        <Router history={createBrowserHistory()}>
          <Route path="/slideshows/:id" component={Slideshow} />
        </Router>
      </div>
    );
  }
}

export default App;
