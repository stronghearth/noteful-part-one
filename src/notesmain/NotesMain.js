import React from 'react';
import {NavLink} from 'react-router-dom'
import StateContext from '../StateContext'

class NotesMain extends React.Component {
  static contextType = StateContext;

    render() {
        const {deleteNote, notes} = this.context;

        if (this.props.location.pathname === "/" ) {
        return notes.map(note => {
            return <li key={note.id}>
                        <NavLink to={`/note/${note.id}`}>{note.name}</NavLink>
                        <p>Date Modified: {note.modified}</p>
                        <button key={note.id} type='button' onClick={ () => this.props.handleDeleteNote(note.id, deleteNote)}>Delete</button>
                    </li>
        })
        }
        else if (this.props.location.pathname === `/folder/${this.props.match.params.folderid}`) {
            const currentFolder = this.props.match.params.folderid;
            const newNotes = notes.filter(note => note.folderId === currentFolder);
            return newNotes.map(note => {
                return <li key={note.id}>
                            <NavLink to={`/note/${note.id}`}>{note.name}</NavLink>
                            <p>Date Modified: {note.modified}</p>
                            <button key={note.id} type='button' onClick={ () => this.props.handleDeleteNote(note.id, deleteNote)}>Delete</button>
                        </li>
            })
        }
        else {
            return <h2>No notes are present in this folder</h2>
        }
    }
}

export default NotesMain