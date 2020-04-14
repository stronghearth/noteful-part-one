import React from 'react'
import StateContext from '../StateContext'
import PropTypes from 'prop-types'

class NotesExpanded extends React.Component {
    static contextType = StateContext
    
    componentDidMount () {
        const noteToFind = this.props.match.params.noteid
        this.context.fetchNote(noteToFind)
    }
    render() {
        const {note, deleteNote} = this.context;
            return <li key={note.id}>
                        <h2>{note.name}</h2>
                        <h4>Date Modified: {note.modified}</h4>
                        <p>{note.content}</p>
                        <button key={note.id} type='button' onClick={() => this.props.handleDeleteNote(note.id, deleteNote)}>Delete</button>
                    </li>
    }
}

NotesExpanded.propTypes = {
    deleteNote: PropTypes.func,
    notes: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        modified: PropTypes.string,
        folderid: PropTypes.string,
        content: PropTypes.string
    })).isRequired,
    handleDeleteNote: PropTypes.func.isRequired
}

NotesExpanded.defaultProps = {
    notes: [ {} ]
}

export default NotesExpanded