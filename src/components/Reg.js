import React,{Component} from 'react';
import './Reg.css';
import querystring from 'query-string';
import {NavLink} from 'react-router-dom';
import {NavBar, Icon} from 'antd-mobile';
class Reg extends Component{
    reg(username,password){
        // console.log(username,password);
        let obj={a:username,b:password};
        fetch(
            "http://localhost:3000/reg?"+querystring.stringify(obj),
          {
                header:{
                    "Content-type":"application/x-www-form-urlencoded"
                },
                mode:'cors',
            }
           
        ).then(
            res=>res.json()
        ).then(
            (data)=>{
                // console.log(data)
                let on=0;
               for(let i=0;i<data.length-1;i++){
                   if(data[i].username!==username){
                       on=1
                   }else{
                    //    console.log('重名');
                       on=2;
                       break;
                   }
               }
               if(on===1){
                 alert("注册成功");
               }else if(on===2){
                   alert("账户已存在")
               }
            }
        ).catch(
            err=>console.log("err")
        )
    };
    render(){
        return(
            <div className="wrap">
            <div className="reg-fixed_top">
                {/* <div className="top-l"><a href="###" onClick={()=>{this.props.history.go(-1)}}><i className="icons">&#xe626;</i></a></div> */}
                <NavBar style={{background:"#3095ff",color:"#fff"}}
                    mode="light"
                    icon={<Icon type="left"  onClick={()=>{this.props.history.go(-1)}}/>}
                    // onLeftClick={() => console.log('onLeftClick')}
                    rightContent={[
        
                    ]}>注册
                    </NavBar>
                <h1>注册</h1>
                <div className="top-r hide"><a href="###"><i className="icons">&#xe601;</i></a></div>
            </div>
            <div className="container">
                <form className="login-form">
                    <ul>
                        <li>
                            <label>账号:</label>
                            <div className="username"><i className="icons">&#xe614;</i><input type="text" defaultValue="" name="username" ref="ip1" placeholder="请输入您的手机号码"/></div>
                        </li>
                        <li>
                            <label>密码:</label>
                            <div className="password"><i className="icons">&#xe787;</i><input type="text" defaultValue=""  name="password" ref="ip2" placeholder="请输入您的登录密码"/></div>
                        </li>
                        <li>
                            <label>验证码:</label>
                            <div className="password"><i className="icons">&#xe787;</i><input type="text" defaultValue=""  name="yzcode" ref="ip3" placeholder="请输入您的验证码"/><a href="###" className="hqyzm">获取验证码</a></div>
                        </li>
                    </ul>
                    <div className="tyxy">
                      <input type="checkbox" />
                        <label>您已阅读并同意<a href="###">《xx注册协议》</a></label>
                    </div>
                    <div className="log">
                        <a href="###" className="btn-login" style={{background:"#3095ff"}} onClick={()=>{this.reg(this.refs.ip1.value,this.refs.ip2.value)}}>注册</a>
                    </div>
                    <div className="log-more">
                        {/* <a href="login.html" className="btn-reg">立即登录</a> */}
                       <NavLink to="/login" className="btn-reg">立即登录</NavLink>
                       
                    </div>
                </form>
            </div>
        </div>
        )
    };
   
}
export default Reg;