//Import the react and reactDOM library
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import SeasonApp from './seasons/SeasonApp'
import PicApp from './pics/PicApp'
//Create react components

//Take the react component and show it on the screen
ReactDOM.render(<PicApp />, document.querySelector('#root'));