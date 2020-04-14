import React, { Component } from 'react';
import ApiService from './ApiService';

const StateContext = React.createContext({
    folders: [],
    folder: {},
    notes: [],
    note: {},
    error: null,
    fetchFolders: () => {},
    fetchNotes: () => {},
    fetchNote: () => {},
    addFolder: () => {},
    addNote: () => {},
    deleteNote: () => {},
});

export default StateContext;

export class StateProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            folders: [],
            folder: {},
            notes: [],
            note: {},
            error: null
        }
    }

    fetchFolders = () => {
        ApiService.getFolders()
            .then(res => {
                this.setState({
                    folders: res
                })
            })
            .catch(error => {
                this.setState({
                    error: error.message
                })
            })
    }

    fetchNotes = () => {
        ApiService.getAllNotes()
        .then(res => {
            this.setState({
                notes: res
            })
        })
        .catch(error => {
            this.setState({
                error: error.message
            })
        })
    }

    fetchNote = (noteId) => {
        ApiService.getNoteById(noteId)
        .then(res => {
            this.setState({
                note: res
            })
        })
        .catch(error => {
            this.setState({
                error: error.message
            })
        })
    }

    addFolder = (newFolder) => {
        ApiService.postFolder(newFolder) 
        .then(
            this.setState({
                ...this.state.folders.push(newFolder)
            })
        )
        .catch(error => {
            this.setState({
                error: error.message
            })
        })
    }

    addNote = (newNote) => {
        ApiService.postNote(newNote)
        .then( res => 
            ApiService.getNoteById(res.id)
            .then(note => {
                this.setState({
                    ...this.state.notes.push(note)
                })
            })   
        )
        .catch(error => {
            this.setState({
                error: error.message
            })
        })
    }

    deleteNote = (noteId) => {
        ApiService.deleteNote(noteId)
        const newNotes = this.state.notes.filter(note => note.id !== noteId)
        this.setState({
            notes: newNotes
        })
    }

    render() {
        const value = {
            folders: this.state.folders,
            folder: this.state.folder,
            notes: this.state.notes,
            note: this.state.note,
            error: this.state.error,
            fetchFolders: this.fetchFolders,
            fetchNotes: this.fetchNotes,
            fetchNote: this.fetchNote,
            addFolder: this.addFolder,
            addNote: this.addNote,
            deleteNote: this.deleteNote
        }
        return (
            <StateContext.Provider value={value}>
                {this.props.children}
            </StateContext.Provider>
        )
    }
}