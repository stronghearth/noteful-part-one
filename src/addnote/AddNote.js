import React from 'react';
import ValidationError from '../ValidationError'
import StateContext from '../StateContext'
import "./addnote.css"
export default class AddNote extends React.Component {
    static contextType = StateContext;

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
        const {handleNoteFormDesc, handleNoteFormName, handleNoteSubmit} = this.context;
        
        return (
        <form className="addNote" onSubmit={(e) => handleNoteSubmit(e, this.props.match.params.folderid, new Date().toLocaleString())}>
            <fieldset>
                <legend>Add Note: </legend>
                <label htmlFor="name">Note Name: </label>
                <input type="text" name="name" onChange={(e) => handleNoteFormName(e.currentTarget.value)}/>
                <br/>
                {<ValidationError message={this.validateName()}/>}
                <br/>
                <label htmlFor="description">Note Description: </label>
                <textarea name="description" className="textarea" onChange={(e) => handleNoteFormDesc(e.currentTarget.value)}/>
                <br />
                <button type="submit">Submit</button>
            </fieldset>
        </form>
        )
    }
}