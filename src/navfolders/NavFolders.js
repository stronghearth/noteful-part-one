import React from 'react';
import {NavLink} from 'react-router-dom'

function NavFolders (props) {
    return props.folders.map(folder => {
        const folderId = props.match.params.folderid 
        return <li key={folder.id}>
             <NavLink activeClassName= {folderId === folder.id ? "active" : "" } to={`/folder/${folder.id}`}>{folder.name}</NavLink>
        </li>
    })
}

export default NavFolders