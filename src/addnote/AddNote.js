import React from 'react';
import ValidationError from '../ValidationError';
import StateContext from '../StateContext';
import PropTypes from 'prop-types';
import "./addnote.css";

export default class AddNote extends React.Component {
    static contextType = StateContext;

    constructor(props) {
        super(props)
        this.state = {
            touched: false,
            folderid: '',
            name: '',
            content: ''
        }
    }

    nameUpdated() {
        this.setState({
            touched: true
        })
    }

    handleFolderChoice(e) {
        const {value} = e.target
        this.setState({
            folderid: value
        })
    }

    handleNoteFormName(e) {
        const { value } = e.target
        this.setState({
            name: value
        })

    }

    handleNoteFormDesc(e) {
        const { value } = e.target
        this.setState({
            content: value
        })

    }

    validateName() {
        const name = this.context.note.name;
        if (name === "") {
            return "Name is required";
        }
        else {
            return null;
        }
    }

    handleNoteSubmit(e) {
        e.preventDefault()
        const newNote = {
            name: this.state.name,
            content: this.state.content,
            folderid: this.state.folderid,
        }
        this.context.addNote(newNote)
    }

    render() {
        const {folders} = this.context;
        const folderOptions = folders.map(folder => {
            return <option key={folder.id} value={folder.id}>{folder.name}</option>
        })
        return (
        <form className="addNote" onSubmit={(e) => this.handleNoteSubmit(e)}>
            <fieldset>
                <legend>Add Note </legend>

                <label htmlFor="name">Note Name: </label>
                <input type="text" name="name" onChange={(e) => {this.handleNoteFormName(e); this.nameUpdated()}}/>
                {this.state.touched && <ValidationError message={this.validateName()}/>}
                <br/>

                <label htmlFor="folder">Folder: </label>
                <select name="folder" onChange={(e)=> {this.handleFolderChoice(e)}}>
                    <option value="Choose Folder">Choose Folder</option>
                    {folderOptions}
                </select>

                <br/>
                <label htmlFor="description">Note Description: </label>
                <textarea name="description" className="textarea" onChange={(e) => this.handleNoteFormDesc(e)}/>
                <br />
                <button type="submit" disabled={this.validateName()}>Submit</button>
            </fieldset>
        </form>
        )
    }
}

AddNote.propTypes = {
    handleNoteFormDesc: PropTypes.func,
    handleNoteFormName: PropTypes.func,
    handleNoteSubmit: PropTypes.func
}