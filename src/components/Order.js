import React,{Component} from 'react';
import './Order.css';
import Ywc from '../assets/img/ywc.png';
import Pic1 from '../assets/img/pic1.png';
import querystring from 'query-string';
import {NavBar, Icon} from 'antd-mobile';
import { Button, WhiteSpace, WingBlank } from 'antd-mobile';
class Order extends Component{
    render(){
        let fromcar = querystring.parse(this.props.location.search);
        // console.log(fromcar)
        return(
            <div className="wrap">
            
            {/* <h2 onClick={()=>{this.props.history.go(-1)}} style={{background:"#17ce71",marginTop:'3rem',height:"3rem",lineHeight:"3rem"}}>返回</h2> */}
            <NavBar style={{background:"#3095ff",color:"#fff"}}
                    mode="light"
                    icon={<Icon type="left"  onClick={()=>{this.props.history.go(-1)}}/>}
                    // onLeftClick={() => console.log('onLeftClick')}
                    rightContent={[
                        <Icon key="0" type="search" style={{ marginRight: '16px'}} />,
                        <Icon key="1" type="ellipsis" />,
                    ]}>我的订单
                    </NavBar>
             <ul className="orderstab">
               <li className="active"><a href="###">全部</a></li>	
               <li><a href="###">待付款</a></li>	
               <li><a href="###">待收货</a></li>	
               <li><a href="###">已完成</a></li>	
               <li><a href="###">已取消</a></li>	
            </ul>
            <ul className="orders_list">
                <li className="dfk">
                    <dl>
                        <img src={Ywc} alt=""/>
                        <dt>
                            <h2>订单号:MZ8778414848488</h2>
                            <span>待付款</span>
                            <i className="icons del">&#xe649;</i>
                        </dt>
                        <dd>
                            <div className="ddinfo">
                                <img src={fromcar.img || Pic1 } alt="" />
                                <p>{fromcar.name}</p>
                            </div>
                            <div className="dd_subinfo">
                                <span>共1件商品</span><span>实付款:<font>{fromcar.price}</font></span>
                            </div>
                            <div className="shdz">
                                <h4><span>侯钰凯</span><span>1586264544</span></h4>
                                  <p>武汉市江夏区保利海上五月花17栋1702</p>
                            </div>
                            {/* <div className="dd_btns"> */}
                                {/* <a className="qxdd" href="###">取消订单</a> */}
                                <Button type="primary" inline style={{ marginRight: '8px',marginLeft:"12rem" ,marginTop:"1rem"}}>取消订单</Button>
                                <Button type="ghost" inline style={{ marginRight: '4px' }} className="am-button-borderfix">立即支付</Button>

                                {/* <a className="ljzf" href="###">立即支付</a> */}
                            {/* </div> */}
                        </dd>
                    </dl>
                </li>
            </ul>
            <Button type="warning">warning</Button><WhiteSpace />
           <Button type="warning" disabled>warning disabled</Button><WhiteSpace />

           <Button loading>loading button</Button><WhiteSpace />
          <Button icon="check-circle-o">with icon</Button><WhiteSpace />
            </div>
        )
    }
}
export default Order;