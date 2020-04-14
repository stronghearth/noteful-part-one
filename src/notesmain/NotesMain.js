import React from 'react';
import {NavLink} from 'react-router-dom';
import PropTypes from 'prop-types';
import StateContext from '../StateContext';
import './notesmain.css';


class NotesMain extends React.Component {
  static contextType = StateContext;

    render() {
        const {deleteNote, notes} = this.context;

        if (this.props.location.pathname === "/" ) {
            return notes.map(note => {
                return <li key={note.id}>
                            <NavLink to={`/note/${note.id}`} className="noteLink">{note.name}</NavLink>
                            <p>Date Modified: {note.modified}</p>
                            <button key={note.id} type='button' onClick={ () => this.props.handleDeleteNote(note.id, deleteNote)}>Delete</button>
                        </li>
            })
        }
        else {
            // const currentFolder = this.props.match.params.folderId;
            const newNotes = notes.filter(note => note.folder_Id === this.props.match.params.folderId);
            return newNotes.map(note => {
                return <li key={note.id}>
                            <NavLink to={`/note/${note.id}`} className="noteLink">{note.name}</NavLink>
                            <p>Date Modified: {note.modified}</p>
                            <button key={note.id} type='button' onClick={ () => this.props.handleDeleteNote(note.id, deleteNote)}>Delete</button>
                        </li>
            })
        }
    }
}

NotesMain.propTypes = {
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

NotesMain.defaultProps = {
    notes: [ {} ]
}
export default NotesMain