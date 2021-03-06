import React from 'react';
import './sidebar.css';
import StateContext from '../StateContext';
import PropTypes from 'prop-types';
import NavFolders from '../navfolders/NavFolders';
import NotesNav from '../notesnav/NotesNav';
import AddFolder from '../addfolder/AddFolder'

class Sidebar extends React.Component{
    static contextType = StateContext

    state = {
        formOpen: false
    }

    handleOpen = () => {
        this.setState({
            formOpen: true
        })
    }

    handleClose = () => {
        this.setState({
            formOpen: false
        })
    }

    renderAddFolderForm = () => {
        if (this.state.formOpen){
            return <>
            <AddFolder />
            <button onClick={() => this.handleClose()}>Close</button>
            </>
        }
        return <></>
    }

    render() {
        const {error} = this.context;
        if (error !== null){
            return <p className="errorMessage">An error has occured: {error}</p>
        }
        else if (this.props.location.pathname === '/' || this.props.match.params.folderId)  {
            return <nav className="sidebar">
                        <ul>
                            <NavFolders 
                                {...this.props}
                            />
                        </ul>
                        <button type="button" onClick={() => this.handleOpen()}>Add Folder</button>
                        {this.renderAddFolderForm()}
                    </nav>   
        }
        else {
            return <NotesNav {...this.props}/>
        }
    }
}

Sidebar.propTypes = {
    error: PropTypes.string
}

Sidebar.defaultProps = {
    error: null
}

export default Sidebar