import React from 'react';
import Comment from './Comment'

const ApprovalCard=(props)=>{
    console.log(props)
    return (
        <div className="ui card">
            <div className="content">
                {props.children}
            </div>
            <div className="extra content">
                <div  className="ui three buttons">
                    <button className="ui basic green button">Approve</button>
                    <button className="ui basic red button">Delete</button>
                </div>
            </div>
        </div>
    )
}

export default ApprovalCard;