import React from 'react';
import './notesnav.css';
import StateContext from '../StateContext'

class NotesNav extends React.Component {
    static contextType = StateContext;
    render() {
        const {folders, notes} = this.context;
        const currentNote = notes.find(note => this.props.match.params.noteid === note.id) || {}
        const currentFolder = folders.find(folder => currentNote.folderId === folder.id) || {}
        
        return <li>
                    <p>{currentFolder.name}</p>
                    <button type="button" onClick={() => this.props.history.goBack()}>Back</button>
                </li>
    }
}

export default NotesNav