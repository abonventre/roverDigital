import { combineReducers } from 'redux';
import { playlists, playlistsHasErrored, playlistsIsLoading } from './playlists';

export default combineReducers({
    playlists,
    playlistsHasErrored,
    playlistsIsLoading
});