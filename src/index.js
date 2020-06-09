//Import the react and reactDOM library
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import SeasonApp from './seasons/SeasonApp'
//Create react components

//Take the react component and show it on the screen
ReactDOM.render(<SeasonApp />, document.querySelector('#root'));