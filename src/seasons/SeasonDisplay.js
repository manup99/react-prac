import React from 'react';
import './SeasonDisplay.css'
const getSeason = (lat,month) => {
    if(month >2 &&month <9){
        return lat > 0 ? 'summer':'winter';
    }
    else{
        return lat > 0 ? 'winter' : 'summer'
    }
};

const SeasonConfig = {
    summer : {
        text:"Let's hit the beach",
        iconName:"sun"
    },
    winter : {
        text:"Burrr..its really cold",
        iconName:"snowflake"
    }
}


class SeasonDisplay extends React.Component{


    render(){
        const season = getSeason(this.props.lat, new Date().getMonth())
        const {text,iconName} = SeasonConfig[season]
        return (
            <div className={`season-display ${season}`}>
                <i className={`${iconName} icon-left icon massive`} />
                <h1 style={{textAlign:'center'}}>{text}</h1>
                <i className={`${iconName} icon-right icon massive`} />

            </div>
        )
    }
}

export default SeasonDisplay;