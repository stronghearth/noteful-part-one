import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import AppError from './AppError';
import Header from './header/Header';
import Main from './main/Main';
import Sidebar from './sidebar/Sidebar';
import StateContext from './StateContext'

class App extends React.Component {
  static contextType = StateContext

  componentDidMount() {
    this.context.fetchFolders()
    this.context.fetchNotes()
  }

  render() {
    return  <>
                <Header />

                <AppError>
                <div className="container">
                      <Route 
                        exact
                        path ="/" 
                        render={props => <Sidebar {...props}/>}
                      />
                      <Route
                        exact
                        path="/folder/:folderId"
                        render={props => <Sidebar {...props} />}
                      />
                      <Route
                        exact
                        path="/note/:noteid"
                        render={props => <Sidebar {...props} />}
                      />
                      <Route 
                        exact
                        path="/" 
                        render={props => <Main {...props}/>}
                      />
                      <Route 
                        exact
                        path="/folder/:folderId"
                        render={props => <Main {...props}/>}
                      />
                      <Route
                        exact
                        path="/note/:noteid"
                        render={props => <Main {...props}/>}
                      />
                </div>
                </AppError>
          </>

  }
}

export default App;
