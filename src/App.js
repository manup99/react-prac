import React, {Component} from 'react'
import Comment from './propsuse/Comment'
import ApprovalCard from './propsuse/ApprovalCard'


const App = function(){
    function time(){
        return (new Date()).toLocaleTimeString()
    }
    return(
        //Learned about how to use props and childrens in function based component

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