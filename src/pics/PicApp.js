import React from 'react';
import SearchBar from './SearchBar'
// import axios from 'axios'
import unsplash from './api/unsplash'
import ImageList from './ImageList'
class PicApp extends React.Component{
    state={
        arr:[]
    }

    onSearchSubmit= async (term)=>{
        
        const response = await unsplash.get('search/photos', {
            params:{
                query:term
            }
        });
        this.setState({
            arr:response.data.results
        })
    }

    render(){
        return(
            <div className="ui container" style={{marginTop:'10px'}}>
                <SearchBar submitfunc={this.onSearchSubmit}/>
                <h1>  Found {this.state.arr.length} results  </h1>
                <ImageList images={this.state.arr}/>
            </div>
        )
    }
}

export default PicApp;