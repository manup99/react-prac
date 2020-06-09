import React, {Component} from 'react';
import faker from 'faker';
import logo from '../logo512.png'

const Comment = function(props){
    console.log(props)
    return (
            <div className="comment">
                <a href="/" className="avatar">
                    <img alt="avatar" src={faker.image.avatar()}/>
                </a>
                <div className="content">
                    <a href="/" className="author">
                        {props.name}
                    </a>
                </div>
                <div className="metadata">
                    <span className="data">Today at {props.time}</span>
                </div>
                <div className="text">
                    {props.comment}
                </div>
            </div>
    )
}

export default Comment;