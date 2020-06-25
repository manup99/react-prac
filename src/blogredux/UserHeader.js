import React from 'react';
import {connect} from 'react-redux';


class UserHeader extends React.Component {
    render() {
        if(!this.props.user){
            return (
                <div>Loading...</div>
            )
        }
        else{
            return (
            <div className="header">{this.props.user.name}</div>
            )
        }
    }
}
const mapStateToProps=(state,ownProps)=>{
    return {
        user:state.user.find(user=>user.id===ownProps.userid)
    }
}
export default connect(mapStateToProps)(UserHeader);