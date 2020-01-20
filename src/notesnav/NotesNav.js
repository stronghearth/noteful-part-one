import React from 'react';
import './notesnav.css';
import StateContext from '../StateContext';
import PropTypes from 'prop-types';

class NotesNav extends React.Component {
    static contextType = StateContext;
    render() {
        const {folders, notes} = this.context;
        const currentNote = notes.find(note => this.props.match.params.noteid === note.id) || {}
        const currentFolder = folders.find(folder => currentNote.folderId === folder.id) || {}
        
        return <li className="openNoteFolder">
                    <p>{currentFolder.name}</p>
                    <button type="button" onClick={() => this.props.history.goBack()}>Back</button>
                </li>
    }
}

NotesNav.propTypes = {
    folders: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string
    })).isRequired,
    notes: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        modified: PropTypes.string,
        folderId: PropTypes.string,
        content: PropTypes.string
    })).isRequired,
}

NotesNav.defaultProps = {
    folders: [ {} ],
    notes: [ {} ]
}

export default NotesNav