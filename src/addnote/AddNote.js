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
            folder_id: ""
        }
    }

    nameUpdated() {
        this.setState({
            touched: true
        })
    }

    handleFolderChoice(e) {
        this.setState({
            folder_id: e.target.value
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

    render() {
        const {handleNoteFormDesc, handleNoteFormName, handleNoteSubmit, folders} = this.context;
        const folderOptions = folders.map(folder => {
            return <option key={folder.id} value={folder.id}>{folder.name}</option>
        })
        return (
        <form className="addNote" onSubmit={(e) => handleNoteSubmit(e, this.state.folder_id, new Date().toLocaleString())}>
            <fieldset>
                <legend>Add Note </legend>

                <label htmlFor="name">Note Name: </label>
                <input type="text" name="name" onChange={(e) => {handleNoteFormName(e.currentTarget.value); this.nameUpdated()}}/>
                {this.state.touched && <ValidationError message={this.validateName()}/>}
                <br/>

                <label htmlFor="folder">Folder: </label>
                <select name="folder" onChange={(e)=> {this.handleFolderChoice(e)}}>
                    {folderOptions}
                </select>

                <br/>
                <label htmlFor="description">Note Description: </label>
                <textarea name="description" className="textarea" onChange={(e) => handleNoteFormDesc(e.currentTarget.value)}/>
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