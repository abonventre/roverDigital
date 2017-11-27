export const PLAYLISTS_HAS_ERRORED = 'PLAYLISTS_HAS_ERRORED';
export const PLAYLISTS_IS_LOADING = 'PLAYLISTS_IS_LOADING';
export const PLAYLISTS_FETCH_DATA_SUCCESS = 'PLAYLISTS_FETCH_DATA_SUCCESS';

export function playlistsHasErrored(bool) {
    return {
        type: PLAYLISTS_HAS_ERRORED,
        hasErrored: bool
    };
}

export function playlistsIsLoading(bool) {
    return {
        type: PLAYLISTS_IS_LOADING,
        isLoading: bool
    };
}

export function playlistsFetchDataSuccess(playlists) {
    return {
        type: PLAYLISTS_FETCH_DATA_SUCCESS,
        playlists
    };
}

export function playlistsFetchData(url) {
    return (dispatch) => {
        dispatch(playlistsIsLoading(true));

        fetch(url)
            .then((response) => {
                if(!response.ok) {
                    throw Error(response.statusText);
                }

                dispatch(playlistsIsLoading(false));

                return response;
            })
            .then((response) => response.json())
            .then((playlists) => dispatch(playlistsFetchDataSuccess(playlists)))
            .catch(() => dispatch(playlistsHasErrored(true)));
    }
}