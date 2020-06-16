import React from 'react';
import SeasonDisplay from './SeasonDisplay'
import Spinner from './Spinner'
class SeasonApp extends React.Component{
    // constructor(props){
    //     super(props); 
    //     this.state = {
    //         lat : null,
    //         err : '',
    //     }
    // }

    state = {
        lat:null,
        err:""
    }

    componentDidMount(){
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

    componentDidUpdate(){
        console.log('My component is just updated')
    }
    renderContent=()=>{
        if(!this.state.lat && this.state.err) {

            return <div> Error : {this.state.err}</div>
        
        }
        if(!this.state.err && this.state.lat) {
            return <div><SeasonDisplay lat={this.state.lat}/></div>
        }
        
        return <Spinner message="Please accept location request"/>
    }
    render() {
        return (
        <div className="border red">
            {this.renderContent()}
        </div>
        )
    }
}

export default SeasonApp;