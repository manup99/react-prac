import React from 'react';
import {connect} from 'react-redux';
import {selectSong} from './actions'

class SongList extends React.Component {
    render() {
        console.log(this.props);
        const element=this.props.songs.map(obj=>(
            <div className="item" key={obj.title}>
                <div className="right floated content">
                    <button className="ui button primary" onClick={()=>this.props.selectSong(obj)}>
                        Select
                    </button>
                </div>
                <div className="content">
                    <a className="header">{obj.title}</a>
                    <a className="header">{obj.duration}</a>
                </div>
            </div>
        ))
        return (
            <div className="ui divided relaxed list">
                {element}
            </div>
        )
    }
};

const mapStateToProps=(state)=>{
    console.log(state)
    return {
        songs:state.songs
    }
}


export default connect(mapStateToProps,{
    selectSong
})(SongList);