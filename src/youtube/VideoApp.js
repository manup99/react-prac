import React from 'react';
import SearchBar from './SearchBar'
import customaxios from './customaxios'
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'
const Key='AIzaSyDDDkFDmHlrV_7Wz8gfHezINT0jiMcr1fc';

class VideoApp extends React.Component {
    state = {
        arr: [],
        search:false,
        video:null
    }
    componentDidMount(){
        this.onSearchSubmit('cricket');
    }
    onSearchSubmit=async (term)=>{
        try{
                const res = await customaxios.get('/search', {
                    params:{
                        q:term,
                        maxResults:5,
                        part:'snippet',
                        key:`${Key}`,
                        type:'video'
                    }
                })
                this.setState({
                    arr:res.data.items,
                    search:true,
                    video:res.data.items[0]
                })
                console.log(this.state.arr)
        }
        catch(e){
            console.log(e.message);
        }
    }
    onClickVideo=(video)=>{
        this.setState({
            video:video,
        })
    }
    render() {
        console.log(this.state.video)
        return (
            <div className="ui container">
                <SearchBar submit={this.onSearchSubmit}/>
                {this.state.search&&<h3>Found {this.state.arr.length} results</h3>}
                <div className="ui row">
                    <div className="ui stackable grid">
                        <div className="eleven wide column">
                            {this.state.video&&<VideoDetail video={this.state.video} />}
                        </div>
                        <div className="five wide column">
                            <VideoList videos={this.state.arr} onVideo={this.onClickVideo}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default VideoApp;