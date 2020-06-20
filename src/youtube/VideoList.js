import React from 'react';
import VideoItem from './VIdeoItem';

class VideoList extends React.Component {

    render(){
        const element = this.props.videos.map((obj,index)=>(
            <VideoItem video={obj} key={obj.etag} index={index} onVideo={this.props.onVideo}/>
        ));
        return (
            <div role="list" className="ui relaxed divided list">
                {element}
            </div>
        )
    }
};

export default VideoList;