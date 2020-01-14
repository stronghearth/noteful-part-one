import React from 'react'
import './main.css'
import NotesMain from '../notesmain/NotesMain'
import NotesExpanded from '../notesexpanded/NotesExpanded'
import StateContext from '../StateContext'

class Main extends React.Component {
    static contextType = StateContext;
    
    handleDeleteNote = (noteId, callback) => {
        fetch(`http://localhost:9090/notes/${noteId}`, {
            method: 'DELETE',
            headers: {
                  'content-type': 'application/json'
            },
        })
        .then(res => {
            if (!res.ok){
                throw new Error(res.statusText);
            } 
            return res.json()
        })
        .then(res => {
            this.props.history.push('/');
            callback(noteId);
        })
        .catch(err => {
            this.props.error = err.message;
        })
    }

    render () {
        if (this.props.location.pathname === '/' || this.props.match.params.folderid){
        return <main>
                <nav className="mainNav">
                    <ul>
                        <NotesMain 
                            {...this.props} handleDeleteNote={this.handleDeleteNote}/>
                    </ul>
                    <button>Add Note</button>
                </nav>
                </main>
        }
        else {
            return <main>
                        <NotesExpanded {...this.props} handleDeleteNote={this.handleDeleteNote}/>
                    </main>
        }
    }
}

export default Main