import * as React from 'react';
import Header from './Header';
import SlideshowContainer from '../containers/SlideshowContainer'

class App extends React.Component<any, null> {
  render() {
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
}

export default App;