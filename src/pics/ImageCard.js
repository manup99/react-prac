import React from 'react';

class ImageCard extends React.Component{
    constructor(props){
        super(props);
        this.state={
            span:0
        }
        this.imageRef=React.createRef();
    }
    componentDidMount(){
        this.imageRef.current.onload=this.setspan;
    }
    setspan=()=>{
        console.log(this.imageRef.current.clientHeight);
        const height=this.imageRef.current.clientHeight;
        const span=Math.ceil(height/10);
        this.setState({
            span:span
        })
    }
    render(){
        return (
            <div style={{gridRowEnd:`span ${this.state.span}`}}>
                <img ref={this.imageRef}
                    alt={this.props.decription}
                    src={this.props.url}
                />
            </div>
        )
    }
}

export default ImageCard;