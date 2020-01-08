import React from 'react';
import './App.css';
import Header from './header/Header';
import Main from './main/Main';
import Sidebar from './sidebar/Sidebar';

class App extends React.Component {
  state = {
    folders: [],
    notes: []
  }

  render() {
    return <>
            <Header />
            <div className="container">
              <Sidebar />
              <Main />
            </div>
          </>

  }
}

export default App;
