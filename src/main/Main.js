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
            </nav>
            </main>
    }
    else {
        return <main>
                    <NotesExpanded {...props}/>
                </main>
    }
}

export default Main