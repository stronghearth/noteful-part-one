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
            touched: false,
            folderName: ''
        }
    }

    nameUpdated() {
        this.setState({
            touched: true
        })
    }

    handleFolderName(e) {
        const {value} = e.target;
        this.setState({
            folderName: value
        })
    }

    validateName() {
        const name = this.state.folderName;
        
        if (name === "" || name.name === "" ) {
            return "Name is required";
        }
        else {
            return null;
        }
    }

    handleFolderFormSubmit(e) {
        e.preventDefault()
        const newFolder = {name: this.state.folderName}
        this.context.addFolder(newFolder)
    }
    render() {
        
        return (
            <form className="addFolder" onSubmit={(e) => this.handleFolderFormSubmit(e)}>
                <fieldset>
                    <legend>Add Folder</legend>
                    <input type="text" name="name" onChange={(e) => {this.handleFolderName(e); this.nameUpdated()}} placeholder="Name your folder"/>
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