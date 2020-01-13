import React from 'react';
import './notesnav.css';

function NotesNav (props) {
    const currentNote = props.notes.find(note => props.match.params.noteid === note.id)
    const currentFolder = props.folders.find(folder => currentNote.folderId === folder.id) || {}
    return <li>
                <p>{currentFolder.name}</p>
                <button type="button" onClick={() => props.history.goBack()}>Back</button>
            </li>

}

export default NotesNav