import React from 'react';
import './VideoItem.css'
class VideoItem extends React.Component {
    handleClick=(e)=>{
        e.preventDefault();
        console.log(this.props.index)
        this.props.onVideo(this.props.video);
    }
    render() {
        return (
            <div className="item video-item" role="listitem" onClick={this.handleClick}>
                <img className="ui image" src={this.props.video.snippet.thumbnails.medium.url} />
                <div className="content">
                    <a className="header">{this.props.video.snippet.title}</a>
                </div>
            </div>
        )
    }
};

export default VideoItem;