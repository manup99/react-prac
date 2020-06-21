import React from 'react';
import {connect} from 'react-redux';


class SongDetail extends React.Component {
    render() {
        return (
            <div className="four wide column">
                {
                    this.props.song?(
                        <>
                        <h3>{this.props.song.title}</h3>
                        <h4>{this.props.song.duration}</h4>
                        </>
                    ):
                    <h2>Nothing to show</h2>
                }
                
            </div>
        )
    }
};

const mapStateToProps=(state)=>{
    console.log(state)
    return {
        song:state.selectedSong
    }
}
export default connect(mapStateToProps)(SongDetail);