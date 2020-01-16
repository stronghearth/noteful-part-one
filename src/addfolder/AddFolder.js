import React from 'react'
import StateContext from '../StateContext'

export default class AddFolder extends React.Component {
    static contextType = StateContext

    render() {
        const {handleFolderFormSubmit, handleFolderName} = this.context;
        return (
            <form onSubmit={(e) => handleFolderFormSubmit(e)}>
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