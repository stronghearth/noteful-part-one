import React from 'react';
import {NavLink} from 'react-router-dom'

function NotesMain (props) {
    return props.notes.map(note => {
        return <li key={note.id}>
                    <NavLink to={`/note/${note.id}`}>{note.name}</NavLink>
                </li>
    })
    
}

export default NotesMain