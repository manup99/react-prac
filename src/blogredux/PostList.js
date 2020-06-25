import React from 'react';
import { render } from '@testing-library/react';
import {fetchpost,fetchPostsandUsers} from './actions'
import {connect} from 'react-redux'
import UserHeader from './UserHeader';
class PostList extends React.Component {
    componentDidMount(){
        this.props.fetchPostsandUsers();
    }
    render() {
        console.log(this.props)
        const elem=this.props.posts.map(obj=>(
            <div className="item" key={obj.id}>
                <i className="large middle aligned icon user" />
                <div className="content">
                    <div className="description">
                        <h2>{obj.title}</h2>
                        <p>{obj.body}</p>
                    </div>
                    <UserHeader userid={obj.userId} />
                </div>
            </div>
        ))
        return (
            <div className="ui relaxed divided animated middle aligned list">
                {elem}
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return {
        posts:state.posts
    }
}

export default connect(mapStateToProps,{fetchpost,fetchPostsandUsers})(PostList);