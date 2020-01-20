import React from 'react'
import StateContext from '../StateContext'
import PropTypes from 'prop-types'

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

NotesExpanded.propTypes = {
    deleteNote: PropTypes.func,
    notes: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        modified: PropTypes.string,
        folderId: PropTypes.string,
        content: PropTypes.string
    })).isRequired,
    handleDeleteNote: PropTypes.func.isRequired
}

NotesExpanded.defaultProps = {
    notes: [ {} ]
}

export default NotesExpanded