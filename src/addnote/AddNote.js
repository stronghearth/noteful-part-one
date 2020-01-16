import React from 'react';
import ValidationError from '../ValidationError'
import StateContext from '../StateContext'

export default class AddNote extends React.Component {
    static contextType = StateContext;

    /*constructor (props) {
        super(props);
        this.state = {
            note: {
                name: "",
                touched: false
            }
        }
    }*/

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
        <form onSubmit={(e) => handleNoteSubmit(e, this.props.match.params.folderid, new Date().toLocaleString())}>
            <fieldset>
                <legend>Add Note: </legend>
                <label htmlFor="name">Note Name: </label>
                <input type="text" name="name" onChange={(e) => handleNoteFormName(e.currentTarget.value)}/>
                <br/>
                {<ValidationError message={this.validateName()}/>}
                <br/>
                <label htmlFor="description">Note Description: </label>
                <input type="textarea" name="description" onChange={(e) => handleNoteFormDesc(e.currentTarget.value)}/>
                <br />
                <button type="submit">Submit</button>
            </fieldset>
        </form>
        )
    }
}