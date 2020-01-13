import React from 'react';
import {NavLink} from 'react-router-dom'

function NotesMain (props) {
    if (props.location.pathname === "/" ) {
    return props.notes.map(note => {
        return <li key={note.id}>
                    <NavLink to={`/note/${note.id}`}>{note.name}</NavLink>
                    <button type='button'>Delete</button>
                </li>
    })
    }
    else if (props.location.pathname === `/folder/${props.match.params.folderid}`) {
        const currentFolder = props.match.params.folderid;
        const newNotes = props.notes.filter(note => note.folderId === currentFolder);
        return newNotes.map(note => {
            return <li key={note.id}>
                        <NavLink to={`/note/${note.id}`}>{note.name}</NavLink>
                        <button type='button'>Delete</button>
                    </li>
        })
    }
    else {
        return <h2>No notes are present in this folder</h2>
    }
}

export default NotesMain