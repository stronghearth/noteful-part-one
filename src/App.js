import React from 'react';
import './App.css';
import Header from './header/Header';
import Main from './main/Main';
import Sidebar from './sidebar/Sidebar';
import { Route } from 'react-router-dom';
import StateContext from './StateContext'

class App extends React.Component {
  state = {
    folders: [],
    notes: [],
    error: null
  }

  deleteNote = noteId => {
    const newNotes = this.state.notes.filter(note => note.id !== noteId)
    this.setState({
      notes: newNotes
    })
  }

  componentDidMount() {
    fetch('http://localhost:9090/folders')
            .then(res => {
                if(!res.ok) {
                    throw new Error(res.statusText);
                }
                return res.json()
            })
            .then(res => {
                this.setState({
                  folders: res
                })
            })
            .catch(err => this.setState({
                error: err.message
      }))
    fetch('http://localhost:9090/notes')
          .then(res => {
              if(!res.ok) {
                  throw new Error(res.statusText);
              }
              return res.json()
          })
          .then(res => {
              this.setState({
                notes: res
              })
          })
          .catch(err => this.setState({
              error: err.message
          }))
  }

  render() {
    return  <StateContext.Provider value={{
                    folders: this.state.folders,
                    notes: this.state.notes,
                    error: this.state.error,
                    deleteNote: this.deleteNote
            }}>
                <Header />
                
                
                <div className="container">
                  <Route 
                    exact
                    path ="/" 
                    
                    render={props => <Sidebar {...props}/>}
                  />
                  <Route
                    exact
                    path="/folder/:folderid"
                    render={props => <Sidebar {...props} />}
                  />
                  <Route
                    exact
                    path="/note/:noteid"
                    render={props => <Sidebar {...props} folders={this.state.folders} />}
                  />
                  <Route 
                    exact
                    path="/" 
                    render={props => <Main {...props} error={this.state.error}/>}
                  />
                  <Route 
                    exact
                    path="/folder/:folderid"
                    render={props => <Main {...props} error={this.state.error}/>}
                  />
                  <Route
                    exact
                    path="/note/:noteid"
                    render={props => <Main {...props} error={this.state.error}/>}
                  />
                </div>
          </StateContext.Provider>

  }
}

export default App;
