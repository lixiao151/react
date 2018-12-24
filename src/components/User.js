import React from 'react';
import './User.css';
import Pic1 from '../assets/img/pic1.png';
import {NavLink} from 'react-router-dom';

class User extends React.Component{
    render(){
        return (
            <div className="wrap">
            <div className="mycenter_top">
                <div className="baseinfo">
                    <div className="myimg">
                        <img src={Pic1} alt=''/>
                        <h3><span className="nc">{this.props.authEr}</span></h3>
                        <div className="dj">158256126355</div>
                    </div>
                    <div className="qd"  onClick={()=>{this.props.history.go(-1)}}><i className="icons">&#xe6b7;</i>退出</div>
                </div>
                <ul className="ctlist">
                    <li><NavLink to="/order"><i className="icons">&#xe620;</i><p>全部订单</p></NavLink></li>
                    <li><NavLink to="/order"><i className="icons">&#xe66b;</i><p>待付款</p></NavLink></li>
                    <li><NavLink to="/order"><i className="icons">&#xe659;</i><p>待发货</p></NavLink></li>
                    <li><NavLink to="/order"><i className="icons">&#xe664;</i><p>待收货</p></NavLink></li>
                    <li><NavLink to="/order"><i className="icons">&#xe852;</i><p>退款/售后</p></NavLink></li>
                </ul>
            </div>
            <ul className="mycenter_list">
                {/* <li><a href="address.html"><div><i className="icons ititle">&#xe613;</i></div><p>收货地址</p><i className="icons tomore">&#xe60a;</i></a></li> */}
                <li><NavLink to="/problem"><div><i className="icons ititle">&#xe613;</i></div><p>收货地址</p><i className="icons tomore">&#xe60a;</i></NavLink></li>
                <li><NavLink to="/problem"><div><i className="icons ititle">&#xe641;</i></div><p>新闻资讯</p><i className="icons tomore">&#xe60a;</i></NavLink></li>
                <li><NavLink to="/problem"><div><i className="icons ititle">&#xe776;</i></div><p>模板资源</p><i className="icons tomore">&#xe60a;</i></NavLink></li>
            </ul> 
            <ul className="mycenter_list">
                <li><NavLink to="/home"><div><i className="icons ititle">&#xe64b;</i></div><p>关于我们</p><i className="icons tomore">&#xe60a;</i></NavLink></li>
                <li><NavLink to="/home"><div><i className="icons ititle">&#xe62b;</i></div><p>意见反馈</p><i className="icons tomore">&#xe60a;</i></NavLink></li>
            </ul>
        </div>
        )
    }
}
export default User;