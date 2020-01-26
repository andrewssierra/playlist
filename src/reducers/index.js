import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        { title: 'Clair de Lune', duration: '5:02' },
        { title: 'Nocturnes, Op. 9', duration: '4:19' },
        { title: 'Symphony No. 9', duration: '5:12' },
        { title: 'Piano Sonata No. 14', duration: '5:43' }
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }
    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});
