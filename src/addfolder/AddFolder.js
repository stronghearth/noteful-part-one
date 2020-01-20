import React from 'react';
import StateContext from '../StateContext';
import PropTypes from 'prop-types';
import ValidationError from '../ValidationError'
import './addfolder.css';

export default class AddFolder extends React.Component {
    static contextType = StateContext

    constructor(props) {
        super(props)
        this.state = {
            touched: false
        }
    }

    nameUpdated() {
        this.setState({
            touched: true
        })
    }

    validateName() {
        const name = this.context.folderName;
        
        if (name === "" || name.name === "" ) {
            return "Name is required";
        }
        else {
            return null;
        }
    }

    render() {
        const {handleFolderFormSubmit, handleFolderName} = this.context;
        return (
            <form className="addFolder" onSubmit={(e) => handleFolderFormSubmit(e)}>
                <fieldset>
                    <legend>Add Folder</legend>
                    <input type="text" name="name" onChange={(e) => {handleFolderName(e.currentTarget.value); this.nameUpdated()}} placeholder="Name your folder"/>
                    {this.state.touched && <ValidationError message={this.validateName()}/>}
                    <br/>
                    <button type="submit" disabled={this.validateName()}>Submit</button>
                </fieldset>
            </form>
        )
    }
}

AddFolder.propTypes = {
    handleFolderFormSubmit: PropTypes.func,
    handleFolderName: PropTypes.func
}