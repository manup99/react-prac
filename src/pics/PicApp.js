import React from 'react';
import SearchBar from './SearchBar'
import axios from 'axios'
class PicApp extends React.Component{
    state={
        arr:[]
    }
    onSearchSubmit=(term)=>{
        axios.get('https://api.unsplash.com/search/photos', {
        params:{
                query:term
            },    
        headers:{
                Authorization : 'Client-ID e-4Q1l7MvzYLEcpvrJrYcJbc68zUtYwyYp9JnsFWSqE'
            }
        })
        .then(res=>{
            this.setState({
                arr:res.data.results
            })
            console.log(this.state.arr)
        })
    }
    //Both are similar
    // async onSearchSubmit=(term)=>{
        
    //     const response = await axios
    //     .get('https://api.unsplash.com/search/photos', {
    //     params:{
    //             query:term
    //         },    
    //     headers:{
    //             Authorization : 'Client-ID e-4Q1l7MvzYLEcpvrJrYcJbc68zUtYwyYp9JnsFWSqE'
    //         }
    //     });
    // }

    render(){
        return(
            <div className="ui container" style={{marginTop:'10px'}}>
                <SearchBar submitfunc={this.onSearchSubmit}/>
                <h1>  Pic PicApp  </h1>
            </div>
        )
    }
}

export default PicApp;