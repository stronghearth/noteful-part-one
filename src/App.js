import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import config from './config'
import AppError from './AppError';
import Header from './header/Header';
import Main from './main/Main';
import Sidebar from './sidebar/Sidebar';
import StateContext from './StateContext'

class App extends React.Component {
  static contextType = StateContext
//   state = {
//     folders: [],
//     notes: [],
//     note: {
//       name: "",
//       content: "",
//       folderid: ""
//     },
//     folderName: "",
//     error: null
//   }

//   //updates the state notes array when a note is deleted

//   deleteNote = noteId => {
//     const newNotes = this.state.notes.filter(note => note.id !== noteId)
//     this.setState({
//       notes: newNotes
//     })
//   }

//   //manipulates the state note with what the user fills out in the form to generate the body for the handleNoteSubmit POST request

//   handleNoteFormName = (e) => {
//     this.setState({
//       note: {
//         ...this.state.note,
//         name: e
//       }
//     })
//   }

//   handleNoteFormDesc = (e) => {
//     this.setState({
//       note: {
//         ...this.state.note,
//         content: e
//       }
//     })
//   }

//   //POST request for note submitted into AddNote

//   handleNoteSubmit = (e, id) => {
//     e.preventDefault()

//     const submittedNote = {
//       ...this.state.note,
//       folderid: id,
//     }

//     const newNote = JSON.stringify(submittedNote);

//     fetch(`${config.API_ENDPOINT}/notes`, {
//         method: 'POST',
//         headers: {
//           'content-type': 'application/json'
//         },
//         body: newNote
//     }) 
//     .then(res => {
//         if (!res.ok) {
//           throw new Error(res.statusText);
//         }
//         return res.json()
//     })
//     .then(note => {
//         this.setState({
//           ...this.state.notes.push(note),
//         })
//     })
//     .catch(error => {
//       console.log(error)
//         this.setState({
//           error: error.message
//         })
//     })
//   }

// //manipulate state folderName with user input into AddFolder to generate body for POST request to folders

// handleFolderName = (name) => {
//     this.setState({
//         folderName: {
//             name
//         }
//     })
// }

// //POST request for new folder

//  handleFolderFormSubmit = (e) => {
//     const newFolder = JSON.stringify(this.state.folderName);

//     e.preventDefault()

//     fetch(`${config.API_ENDPOINT}/folders`, {
//       method: 'POST',
//       headers: {
//         'content-type': 'application/json'
//       },
//       body: newFolder
//     })
//     .then(res => {
//       if (!res.ok) {
//         throw new Error (res.statusText);
//       }
//       return res.json()
//     })
//     .then(folder => {
//       this.setState({
//         ...this.state.folders.push(folder)
//       })
//     })
//     .catch(error => {
//       this.setState({
//         error: error.message
//       })
//     })
//  }

// //Base GET requests called in componentDidMount

//   getFolders = () => {
//     fetch(`${config.API_ENDPOINT}/folders`, {
//       method: 'GET',
//       headers: {
//         'content-type': 'application/json'
//       },
//     })
//     .then(res => {
//         if(!res.ok) {
//             throw new Error(res.statusText);
//         }
//         return res.json()
//     })
//     .then(res => {
//         this.setState({
//           folders: res
//         })
//     })
//     .catch(err => this.setState({
//         error: err.message
//     }))
//   }

//   getNotes = () => {
//     fetch(`${config.API_ENDPOINT}/notes`, {
//       method: 'GET',
//       headers: {
//         'content-type': 'application/json'
//       },
//     })
//           .then(res => {
//               if(!res.ok) {
//                   throw new Error(res.statusText);
//               }
//               return res.json()
//           })
//           .then(res => {
//               this.setState({
//                 notes: res
//               })
//           })
//           .catch(err => this.setState({
//               error: err.message
//           }))
//   }

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
                        path="/folder/:folderid"
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
                        path="/folder/:folderid"
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
