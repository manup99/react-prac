import React from 'react';
import { render } from '@testing-library/react';
import {fetchpost} from './actions'
import {connect} from 'react-redux'
class PostList extends React.Component {
    componentDidMount(){
        this.props.fetchpost();
    }
    render() {
        return (
            <div className="ui container">
                PostList
            </div>
        )
    }
}

export default connect(null,{fetchpost})(PostList);