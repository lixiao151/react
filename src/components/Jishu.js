import React from 'react';
import './Jishu.css';
// import Serve from  '../common/Serve.js'
import {NavLink} from 'react-router-dom';
import {NavBar, Icon} from 'antd-mobile';
class Jishu extends React.Component{
    render(){
        return(
            <>
              <NavBar style={{background:"#3095ff",color:"#fff"}}
                    mode="light"
                    icon={<Icon type="left"  onClick={()=>{this.props.history.go(-1)}}/>}
                    // onLeftClick={() => console.log('onLeftClick')}
                    rightContent={[
                        <Icon key="0" type="search" style={{ marginRight: '16px'}} />,
                        <Icon key="1" type="ellipsis" />,
                    ]}>服务
            </NavBar>
            {/* <Serve></Serve> */}
            <div className="container">
          
                <ul className="bzzx">
                    <li hidden={true}>
                        {/* <a href="about.html">支付方式</a> */}
                        <NavLink to="/problem">支付方式</NavLink>
                        <i className="icons">&#xe60a;</i>
                    </li>
                    <li hidden={false}>
                    <NavLink to="/problem">配送方式</NavLink>
                        <i className="icons">&#xe60a;</i>
                    </li>
                    <li>
                    <NavLink to="/problem">售后服务</NavLink>
                        <i className="icons">&#xe60a;</i>
                    </li>
                </ul>
             
         </div>
         </>
        )
    }
}
export default Jishu;