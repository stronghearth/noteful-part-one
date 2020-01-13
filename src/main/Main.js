import React from 'react'
import './main.css'
import NotesMain from '../notesmain/NotesMain'
import NotesExpanded from '../notesexpanded/NotesExpanded'

function Main (props) {
    if (props.location.pathname === '/' || props.match.params.folderid){
    return <main>
            <nav className="mainNav">
                <ul>
                    <NotesMain 
                        {...props}/>
                </ul>
                <button>Add Note</button>
            </nav>
            </main>
    }
    else {
        return <main>
                    <NotesExpanded {...props} notes={props.notes}/>
                </main>
    }
}

export default Main