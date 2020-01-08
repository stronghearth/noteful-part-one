import React from 'react'
import './sidebar.css'
import NavFolders from '../navfolders/NavFolders'
import NotesNav from '../notesnav/NotesNav'


function Sidebar (props) {
    if (props.location.pathname === '/') {
        return <nav className="sidebar">
                    <ul>
                        <NavFolders 
                            {...props}
                        />
                    </ul>
                </nav>   
    }
    else {
        return <NotesNav {...props}/>
    }
}

export default Sidebar