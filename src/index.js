//Import the react and reactDOM library
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import SeasonApp from './seasons/SeasonApp'
import PicApp from './pics/PicApp'
import VideoApp from './youtube/VideoApp'
import SongApp from './songsredux/SongApp'
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './songsredux/reducers'
//Create react components



//Take the react component and show it on the screen
ReactDOM.render(
<Provider store={createStore(reducers)}>
    <SongApp />
</Provider>
, document.querySelector('#root'));