import React, {Component} from 'react'



function getButtontext(){
    return 'Click on me'
}
const App = function(){
    //const buttonText = 'Click me'
    return(
        <div>
            <label htmlFor="name">Enter Name:</label>
            <input id="name" type="text" />
    <button style={{backgroundColor:'blue',color:'white'}}>{getButtontext()}</button> 
        </div>
    )
}

export default App;