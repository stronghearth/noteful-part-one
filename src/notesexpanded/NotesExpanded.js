import React from 'react'

function NotesExpanded (props) {
    const currentNote = props.notes.filter(note => props.match.params.noteid === note.id);
    console.log(currentNote)
    return currentNote.map(note => {
        return <li key={note.id}>
                    <h2>{note.name}</h2>
                    <h4>{note.modified}</h4>
                    <p>{note.content}</p>
                    <button type='button'>Delete</button>
                </li>
    })
    
}

export default NotesExpanded