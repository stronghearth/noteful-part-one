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
                exact
                path ="/" 
                render={props => <Sidebar {...props} folders={this.state.folders}/>}
              />
              <Route
                exact
                path="/folder/:folderid"
                render={props => <Sidebar {...props} folders={this.state.folders}/>}
              />
              <Route
                exact
                path="/note/:noteid"
                render={props => <Sidebar {...props} folders={this.state.folders} notes={this.state.notes}/>}
              />
              <Route 
                exact
                path="/" 
                render={props => <Main {...props} notes={this.state.notes}/>}
              />
              <Route 
                exact
                path="/folder/:folderid"
                render={props => <Main {...props} notes={this.state.notes}/>}
              />
              <Route
                exact
                path="/note/:noteid"
                render={props => <Main {...props} folders={this.state.folders}/>}
              />
            </div>

          </>

  }
}

export default App;
