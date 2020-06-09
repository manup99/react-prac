import React from 'react';


class SeasonApp extends React.Component{
    constructor(props){
        super(props); 
        this.state = {
            lat : null,
            err : '',
        }
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({
                    lat:position.coords.latitude
                })
            },
            (err) => {
                this.setState({
                    err : err.message
                })
            }
        )
    }
    render() {
        if(!this.state.lat && this.state.err) {

            return <div> Error : {this.state.err}</div>
        
        }
        if(!this.state.err && this.state.lat) {
            return <div> Latitude : {this.state.lat}</div>
        }
        
        return <div>Loading!</div>
    }
}

export default SeasonApp;