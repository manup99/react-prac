import React from 'react';
import SongList from './SongList'
import SongDetail from './SongDetail'
class SongApp extends React.Component {
    render() {
        return (
            <div className="ui container">
                <div className="ui row">
                    <div className="ui grid">
                        <div className="eight wide column" style={{marginTop:'20px'}}>
                            <SongList />
                        </div>
                        <div className="four wide column"></div>
                        <SongDetail />
                    </div>
                </div>
            </div>
        )
    }
};


export default SongApp;