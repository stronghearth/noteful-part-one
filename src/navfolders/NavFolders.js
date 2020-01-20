import React from 'react';
import {NavLink} from 'react-router-dom';
import StateContext from '../StateContext';
import PropTypes from 'prop-types';

class NavFolders extends React.Component {
    static contextType = StateContext;
    render() {
        const {folders} = this.context
        return folders.map(folder => {
            const folderId = this.props.match.params.folderid 
            return <li key={folder.id} className="folderNav">
                        <NavLink activeClassName= {folderId === folder.id ? "active" : "" } to={`/folder/${folder.id}`}>{folder.name}</NavLink>
                    </li>
        })
    }
}

NavFolders.propTypes = {
    folders: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string
    })).isRequired
}

NavFolders.defaultProps = {
    folders: [ {} ]
}

export default NavFolders