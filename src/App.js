import React from 'react';
import './App.css';
import Header from './header/Header';
import Main from './main/Main';
import Sidebar from './sidebar/Sidebar';
import dummyStore from './dummy-store';
import { Route } from 'react-router-dom';

class App extends React.Component {
  state = {
    folders: [],
    notes: []
  }

  componentDidMount() {
    this.setState({
      folders: dummyStore.folders,
      notes: dummyStore.notes
    })
  }

  render() {
    return <>
            <Header />
            
            <div className="container">
              <Route 
                path ="/" 
                render={props => <Sidebar {...props} folders={this.state.folders}/>}
              />
              <Route 
                path="/" 
                render={props => <Main {...props} notes={this.state.notes}/>}
              />
            </div>

          </>

  }
}

export default App;
