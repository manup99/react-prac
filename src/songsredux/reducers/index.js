import {combineReducers} from 'redux';

const songsReducer=()=>{
    return [
        {title:'No scrubs',duration:'4:05'},
        {title:'Macarena',duration:'5:10'},
        {title:'Lean on',duration:'3:52'},
        {title:'Blinfing Lights',duration:'3:35'},
    ];
};

const selectedSongReducer=(selectedSong=null,action)=>{
    if(action.type==='SONG_SELECTED'){
        return action.payload
    }
    return selectedSong;
}



export default combineReducers({
    songs:songsReducer,
    selectedSong:selectedSongReducer
})