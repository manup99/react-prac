import React from 'react';

class VideoDetail extends React.Component {
    render() {
        const id=`https://www.youtube.com/embed/${this.props.video.id.videoId}`
        return (
            <div>
                <div className="ui segment">
                    <div className="ui embed">
                        <iframe src={id} title="video player"/> 
                    </div>
                    <h4 className="ui header">{this.props.video.snippet.title}</h4>
                    <p>{this.props.video.snippet.description}</p>
                </div>
            </div>
        )
    }
};

export default VideoDetail;