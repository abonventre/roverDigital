export function playlistsHasErrored(state = false, action) {
    switch (action.type) {
        case 'PLAYLISTS_HAS_ERRORED':
            return action.hasErrored;
        default:
            return state;
    }
}

export function playlistsIsLoading(state = false, action) {
    switch (action.type) {
        case 'PLAYLISTS_IS_LOADING':
            return action.isLoading;
        default:
            return state;
    }
}

export function playlists(state = [], action) {
    switch (action.type) {
        case 'PLAYLISTS_FETCH_DATA_SUCCESS':
            return action.playlists;
        default:
            return state;
    }
}