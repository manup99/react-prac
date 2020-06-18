import React from 'react';
import './ImageList.css'
import ImageCard from './ImageCard'
class ImageList extends React.Component {
    render(){
        console.log(this.props.images)
        const element=this.props.images.map(
            (obj)=>
                (
                    <ImageCard url={obj.urls.regular} decription={obj.decription} key={obj.id}/>
                )

        )
        return(
            <div className="image-list">
                {element}
            </div>
        )
    }
};

export default ImageList;