import React from 'react';
import PostList from './PostList'
class BlogApp extends React.Component {
    render() {
        return (
            <div className="ui container">
                <PostList />
            </div>
        )
    }
}

export default BlogApp;