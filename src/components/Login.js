import React from 'react';
import './Login.css';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import {asyncActionAuth} from '../store/asyncAction';
import * as types from '../store/type';
import {NavBar, Icon} from 'antd-mobile';
import querystring from 'query-string';
class Login extends React.Component{
    st(){
        console.log(this.props.login1)
        console.log(this.props.user)
    };
    render(){
        return (
            <div className="wrap">
            <div className="login-fixed_top">
                {/* <div className="top-l"><a href="javascript:" onClick={()=>{this.props.history.go(-1)}}><i className="icons">&#xe626;</i></a></div> */}
                <NavBar style={{background:"#3095ff",color:"#fff"}}
                    mode="light"
                    icon={<Icon type="left"  onClick={()=>{this.props.history.go(-1)}}/>}
                    // onLeftClick={() => console.log('onLeftClick')}
                    rightContent={[
            
                    ]}>登录
                    </NavBar>
                <h1>登录</h1>
                <div className="top-r hide"><a href="###"><i className="icons">&#xe601;</i></a></div>
            </div>
            <div className="container">
            <form className="login-form">
                <ul>
                    <li>
                        <label>账号:</label>
                        <div className="username"><i className="icons">&#xe614;</i><input ref="ipt1" type="text" defaultValue="" name="username"  placeholder="请输入您的手机号码"/></div>
                    </li>
                    <li>
                        <label>密码:</label>
                        <div className="password"><i className="icons">&#xe787;</i><input ref="ipt2" type="text" defaultValue=""  name="password"  placeholder="请输入您的登录密码"/></div>
                    </li>
                </ul>
                <div className="log">
                    {/* <a href="index.html" className="btn-login">登录</a> */}
                    <NavLink to="/user"  className="btn-login" style={{background:"#3095ff"}} onClick={
                        ()=>{
                            this.props.login(this.refs.ipt1.value,this.refs.ipt2.value);this.st();}}>登录</NavLink>
                </div>
                <div className="log-more">
                <NavLink to="/reg" className="btn-reg" >注册</NavLink>
                </div>
            </form>
            </div>
        </div>
        )
    }
};
let initMapStateToProps=state=>({
   login1:state.login,
   user:state.user
});
let initMapDispatchToProps=dispatch=>({
    login:(username,password)=>{
        let obj={a:username,b:password}
        dispatch(asyncActionAuth(
            'http://localhost:3000/login?'+querystring.stringify(obj),
            types.UPDATE_USER
        ))
    }
}) 
export default connect(
    initMapStateToProps,
    initMapDispatchToProps
)(Login)