import React, {Component} from 'react'
import Comment from './Comment'
import ApprovalCard from './ApprovalCard'

function getButtontext(){
    return 'Click on me'
}
const App = function(){
    //const buttonText = 'Click me'
    function time(){
        return (new Date()).toLocaleTimeString()
    }
    //console.log(time())

    return(
        // <div>
        //     <label htmlFor="name">Enter Name:</label>
        //     <input id="name" type="text" />
        //     <button style={{backgroundColor:'blue',color:'white'}}>{getButtontext()}</button> 
        //     <Comment />
        // </div>
        <div className="ui container comments">
            <ApprovalCard>
                <Comment name="Dhanu" time="9:00PM" comment="adorable"/>
            </ApprovalCard>
            <ApprovalCard>
                <Comment name="Manu"time="10:00PM" comment="awesome" />
            </ApprovalCard>
            <ApprovalCard>
                <Comment name="Time" time={time()} />
            </ApprovalCard>
        </div>
    )
}

export default App;