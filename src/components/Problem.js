import React from 'react';
import './Problem.css';
import {NavBar, Icon} from 'antd-mobile';
class Problem extends React.Component{
    render(){
        return(
            <div className="wrap">
            <NavBar style={{background:"#3095ff",color:"#fff"}}
                    mode="light"
                    icon={<Icon type="left"  onClick={()=>{this.props.history.go(-1)}}/>}
                    // onLeftClick={() => console.log('onLeftClick')}
                    rightContent={[
                        <Icon key="0" type="search" style={{ marginRight: '16px'}} />,
                        <Icon key="1" type="ellipsis" />,
                    ]}>服务项目
                    </NavBar>
            {/* <h2 onClick={()=>{this.props.history.go(-1)}} style={{background:"#17ce71",height:"3rem",lineHeight:"3rem"}}>返回</h2> */}
            <div className="infomation">
                <h3>支付方式</h3>
                <div className="details">
                    <p>1.支付宝支付</p>
                    <p>2.微信支付</p>
                    <p>3.银行卡支付</p>
                    <p>4.现金支付</p>
                </div>
                <h3>配送方式</h3>
                <div className="details">
                    <p>1.圆通快速</p>
                    <p>2.中通快递</p>
                    <p>3.韵达快递</p>
                    <p>4.菜鸟驿站</p>
                </div>
                <h3>售后服务</h3>
                <div className="details">
                    <p>1.座机：676400</p>
                    <p>2.移动电话：1558465875</p>
                </div>
            </div>
        </div>
        )
    }
}
export default Problem;