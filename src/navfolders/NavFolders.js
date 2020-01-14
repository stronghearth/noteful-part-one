import React from 'react';
import {NavLink} from 'react-router-dom'
import StateContext from '../StateContext'

class NavFolders extends React.Component {
    static contextType = StateContext;
    render() {
        const {folders} = this.context
        return folders.map(folder => {
            const folderId = this.props.match.params.folderid 
            return <li key={folder.id}>
                        <NavLink activeClassName= {folderId === folder.id ? "active" : "" } to={`/folder/${folder.id}`}>{folder.name}</NavLink>
                    </li>
        })
    }
}

export default NavFolders