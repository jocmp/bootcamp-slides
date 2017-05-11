import * as React from 'react';
import { Router, Route } from 'react-router' 
import createBrowserHistory from 'history/createBrowserHistory' 
import Header from './Header';
import SlideshowContainer from '../containers/SlideshowContainer'
import { Provider } from 'react-redux'

class App extends React.Component<any, null> {
  render() {
    return (
      <div className="App">
        <Header />
        <Provider store={this.props.store}>
          <Router history={createBrowserHistory()}>
            <Route path="/slideshows/:id/slides/:index" component={SlideshowContainer} />
          </Router>
        </Provider>  
      </div>
    );
  }
}

export default App;
