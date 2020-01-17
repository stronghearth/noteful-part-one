import React from 'react';
import StateContext from '../StateContext';
import PropTypes from 'prop-types';
import './addfolder.css';

export default class AddFolder extends React.Component {
    static contextType = StateContext

    render() {
        const {handleFolderFormSubmit, handleFolderName} = this.context;
        return (
            <form className="addFolder" onSubmit={(e) => handleFolderFormSubmit(e)}>
                <fieldset>
                    <legend>Add Folder</legend>
                    <input type="text" name="name" onChange={(e) => handleFolderName(e.currentTarget.value)}/>
                    <br/>
                    <button type="submit">Submit</button>
                </fieldset>
            </form>
        )
    }
}

AddFolder.propTypes = {
    handleFolderFormSubmit: PropTypes.func,
    handleFolderName: PropTypes.func
}