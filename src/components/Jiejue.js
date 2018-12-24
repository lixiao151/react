import React from 'react';
import './Jiejue.css';
import Zws from'../assets/img/zws.png';
import Jdbm from '../assets/img/jdbm.png';
import Yxhh from'../assets/img/yxhh.png';
import Zc from'../assets/img/zc.png';

class Jiejue extends React.Component{
    render(){
        return(
            <div className="ztmc">
				<h2>解决方案<i className="icons">&#xe60a;</i></h2>
				<ul className="index_list">
					<li><div><img src={Zws} alt=""/></div><p>智慧景区</p></li>
					<li><div><img src={Jdbm} alt=""/></div><p>智慧零售</p></li>
					<li><div><img src={Yxhh} alt=""/></div><p>智慧船舱</p></li>
					<li><div><img src={Zc} alt=""/></div><p>智慧发布</p></li>
				</ul> 
			</div>
        )
    }
}
export default Jiejue;