import config from './config'

const ApiService = {
    getFolders: () => {
        return fetch(`${config.API_ENDPOINT}/folders`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }
        })
        .then(res => res.ok
            ? Promise.resolve(res.json())
            : Promise.reject('Cannot get folders'))
    },
    postFolder : (newFolder) => {
        return fetch(`${config.API_ENDPOINT}/folders`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(
                newFolder
            )
        })
            .then(res => res.ok
                ? Promise.resolve(res.json())
                : Promise.reject('Cannot add folder'))
    },
    getAllNotes : () => {
        return fetch(`${config.API_ENDPOINT}/notes`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }
        })
        .then(res => res.ok
            ? Promise.resolve(res.json())
            : Promise.reject('Cannot get notes'))
    },
    postNote: (newNote) => {
        return fetch(`${config.API_ENDPOINT}/notes`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(
                newNote
            )
        })
        .then(res => res.ok
            ? Promise.resolve(res.json())
            : Promise.reject('Cannot add note'))
    },
    getNoteById: (noteId) => {
        return fetch(`${config.API_ENDPOINT}/notes/${noteId}`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }
        })
        .then(res => res.ok
            ? Promise.resolve(res.json())
            : Promise.reject('Cannot retrieve note'))
    },
    deleteNote: (noteId) => {
        return fetch(`${config.API_ENDPOINT}/notes/${noteId}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            }
        })
        .then(res => res.ok
            ? Promise.resolve(res.json())
            : Promise.reject('Cannot delete note'))
    }
}

export default ApiService