import React from 'react';


class SearchBar extends React.Component {
    constructor(props){
        super(props);
        this.state={
            term:''
        }
        this.searchRef=React.createRef();
    }
    componentDidMount(){
        this.searchRef.current.focus();
    }
    onFormSubmit=(e)=>{
        e.preventDefault();
        this.props.submit(this.state.term);
    }
    render() {
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>Search Videos</label>
                        <input value={this.state.term} ref={this.searchRef} onChange={(e)=>this.setState({[e.target.name]:e.target.value})} name="term" type="text" placeholder="Search..." />
                    </div>
                    <button type="submit" className="ui button">Search</button>
                </form>
            </div>
        )
    }
}

export default SearchBar;