import React from 'react';
import {NavLink} from 'react-router-dom'

function NavFolders (props) {
    return props.folders.map(folder => {
        return <li key={folder.id}>
            <NavLink to={`/folder/${folder.id}`}>{folder.name}</NavLink>
        </li>
    })
}

export default NavFolders