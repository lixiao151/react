import React from 'react';
import ReactSwipe from 'react-swipe';
import ban1 from '../assets/img/banner.png';
import ban2 from '../assets/img/banner1.png';
import ban3 from '../assets/img/banner2.png';

class Banner extends React.Component{
    render(){
        return(
            <ReactSwipe className="carousel" swipeOptions={{
                continuous: true,
                speed:1000,
                auto:1000,
        
              }}>
                <div><img src={ban1} alt=""/></div>
                <div><img src={ban2} alt=""/></div>
                <div><img src={ban3} alt=""/></div>
              </ReactSwipe>
        )
    }
}
export default Banner;