import React from 'react'
import './main.css'
import StateContext from '../StateContext'
import PropTypes from 'prop-types'
import NotesMain from '../notesmain/NotesMain'
import NotesExpanded from '../notesexpanded/NotesExpanded'
import AddNote from '../addnote/AddNote'


class Main extends React.Component {
    static contextType = StateContext;

    state = {
        formOpen: false
    }
    
    handleDeleteNote = (noteId) => {
        this.context.deleteNote(noteId)
    }

    handleOpen = (e) => {
        e.preventDefault()
        this.setState({
            formOpen: true
        })
    }

    handleClose = (e) => {
        e.preventDefault()
        this.setState({
            formOpen: false
        })
    }

    renderAddNote = () => {
        if (this.state.formOpen) {
            return (
                <>
                <AddNote {...this.props} close={this.handleClose}/>
                <button onClick={(e) => this.handleClose(e)}>Close</button>
                </>
            )
        }
        return <></>
    }

    render () {
        const {error} = this.context
        if (error !== null) {
            return <main>
                    <p className="errorMessage">An error has occurred: {error}</p>
                </main>
        }
        else if (this.props.location.pathname === '/' || this.props.match.params.folderId){
        return <main>
                <nav className="mainNav">
                    <ul>
                        <NotesMain 
                            {...this.props} handleDeleteNote={this.handleDeleteNote}/>
                    </ul>
                    <button onClick={(e) => this.handleOpen(e)}>Add Note</button>
                    {this.renderAddNote()}
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

Main.propTypes = {
    error: PropTypes.string,
    pathname: PropTypes.string,
    folderId: PropTypes.string
}

export default Main