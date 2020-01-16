import React from 'react'
import StateContext from '../StateContext'
import './addfolder.css'

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