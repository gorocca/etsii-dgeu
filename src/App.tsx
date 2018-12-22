import * as React from 'react';

import Footer from 'src/components/Footer';
import Header from 'src/components/Header';
import './App.css';
import './assets/css/main.css';


class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Header />
        
        <Footer />
      </div>
    );
  }
}

export default App;
