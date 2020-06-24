//Import the react and reactDOM library
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import SeasonApp from './seasons/SeasonApp'
import PicApp from './pics/PicApp'
import VideoApp from './youtube/VideoApp'
import SongApp from './songsredux/SongApp'
import BlogApp from './blogredux/BlogApp'
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import reducers from './songsredux/reducers'
import blogreducers from './blogredux/blogreducers'
import thunk from 'redux-thunk';
//Create react components



//Take the react component and show it on the screen
//This was for the redux song app
// ReactDOM.render(
// <Provider store={createStore(reducers)}>
//     <SongApp />
// </Provider>
// , document.querySelector('#root'));


//Now this ones for BlogApp


const blogStore=createStore(blogreducers,applyMiddleware(thunk));

ReactDOM.render(
<Provider store={blogStore}>
    <BlogApp />
</Provider>
,document.querySelector('#root'));
