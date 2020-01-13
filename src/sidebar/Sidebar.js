import React from 'react'
import './sidebar.css'
import NavFolders from '../navfolders/NavFolders'
import NotesNav from '../notesnav/NotesNav'


function Sidebar (props) {
    if (props.location.pathname === '/' || props.match.params.folderid)  {
        return <nav className="sidebar">
                    <ul>
                        <NavFolders 
                            {...props}
                        />
                    </ul>
                    <button type="button">Add Folder</button>
                </nav>   
    }
    else {
        return <NotesNav {...props}/>
    }
}

export default Sidebar