import React from 'react'
import StateContext from '../StateContext'


class NotesExpanded extends React.Component {
    static contextType = StateContext
    
    render() {
        const {notes, deleteNote} = this.context;
        const currentNote = notes.filter(note => this.props.match.params.noteid === note.id);
        
        return currentNote.map(note => {
            return <li key={note.id}>
                        <h2>{note.name}</h2>
                        <h4>Date Modified: {note.modified}</h4>
                        <p>{note.content}</p>
                        <button key={note.id} type='button' onClick={() => this.props.handleDeleteNote(note.id, deleteNote)}>Delete</button>
                    </li>
            })
    }
}

export default NotesExpanded