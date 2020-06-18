import React from 'react';

class SearchBar extends React.Component{
    constructor(props){
        super(props);

        this.searchRef=React.createRef();
    }
    componentDidMount(){
        this.searchRef.current.focus()
        console.log(this.searchRef)
    }
    state={
        term:''
    };
    onSubmitForm=(event)=>{
        event.preventDefault();
        this.props.submitfunc(this.state.term);
    }
    render(){
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onSubmitForm}>
                    <div className="field">
                        <label htmlFor="search">Image Search</label>
                        <input  ref={this.searchRef} type="text" id="search" value={this.state.term} name="term" onChange={(e)=>this.setState({[e.target.name]:e.target.value})}/>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default SearchBar;