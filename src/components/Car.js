import React,{Component} from 'react';
import './Car.css';
import {Link} from 'react-router-dom';
import querystring from 'query-string';
import {connect} from 'react-redux';
import * as types from '../store/type';
import {Button,Checkbox,NavBar, Icon} from 'antd-mobile';
const CheckboxItem = Checkbox.CheckboxItem;
class Car extends Component{
    render(){
        let num= 0;
        let {buycar,changeItem,clearItem,clearAll} =this.props;
       /* buycar.map((item)=>{
            num+=parseFloat(item.price.slice(1,8))*(item.number)
        })
        console.log(num);
       console.log(buycar)*/
        return(
                <div className='warp'>
                <NavBar style={{background:"#3095ff",color:"#fff" }}
                    mode="light"
                    icon={<Icon type="left"  onClick={()=>{this.props.history.go(-1)}}/>}
                    // onLeftClick={() => console.log('onLeftClick')}
                    rightContent={[
                        <Icon key="0" type="search" style={{ marginRight: '16px'}} />,
                        <Icon key="1" type="ellipsis" />,
                    ]}
                        >购物车</NavBar>
                <div className="container" style={{marginBottom:"7rem",paddingTop:"0px"}}>	
                    <ul className="gw_list">
                    { buycar &&
                        buycar.map((item,index)=>{
                            num+=parseFloat(item.price.slice(1,8))*(item.number)
                            return (
                            <li key={index}>
                            <dl>
                                <dt><input type="checkbox"  /> <span>购买商品</span></dt>
                                <dd>
                                    <div className="gwinfo" ref="car">
                                        <div className="checks">
                                        <input type="checkbox"/> 
                                        </div>
                                        <img className="gw_img" src={item.img} alt=''/>
                                        <h4><p>{item.name}</p></h4>
                                        <p><span className="price" style={{color:"#3095ff"}}>{item.price}</span></p>
                                        <div className="addminus">
                                            <a href="javsacript:;" className="minus" onClick={()=>{changeItem(item.id,-1)}}><i className="icons">&#xe67d;</i></a>

                                            {/* <input type='number' defaultValue={item.number}  style={{width:"25px",height:"25px",textAlign:"center",borderStyle:"solid"}}/> */}
                                            <span style={{width:"25px",height:"25px",textAlign:"center",borderStyle:"1px #000 solid"}}>{item.number<1?item.number=1:item.number }</span>
                                            <a href="javsacript:;" className="add" onClick={()=>{changeItem(item.id,1)}}><i className="icons">&#xe60b;</i></a>
                                        </div>
                                        <Button type="primary" inline  style={{height:'2rem',marginLeft:"6rem",lineHeight:"2rem"}} onClick={()=>{clearItem(item.id)}}>删除</Button>
                                    </div>
                                </dd>
                            </dl>
                        </li>)
                        })
                    }
                    
                    </ul>
                    <Button type="primary" onClick={()=>{clearAll()}}>全部删除</Button>
                </div>
            
            <div className="pay">
            <CheckboxItem style={{position:"absolute",background:"#f5f5f9"}}>
                全选
            </CheckboxItem>
                    <div className="js paytab" style={{marginLeft:"3rem"}}>
                            <span className="yf">不含运费</span>
                        <p>合计:<span>￥：{num}</span></p>
                        <Link style={{fontSize:"1rem"}} to={        //分隔符，jsx里面写js表达式
                            {pathname:'/order',
                            search:querystring.stringify(           //传字符串格式
                                ...buycar             
                            )
                            
                            }}>结算</Link>
                    </div>
            </div>
        </div>
        )
    }
}

let MapStateToProps=state=>(
    {
        buycar:state.buycar
    }
);
let MapDispatchToProps=(dispatch)=>({
        changeItem:(id,numb)=>{dispatch({
                type:types.CHANGE_ITEM,
                payload:[id,numb]
            })
        },
        clearItem:(id)=>{dispatch({
            type:types.CLEAR_ITEM,
            payload:id
        })},
        clearAll:()=>{dispatch({
            type:types.CLEAR_ALL,
            payload:[]
        })}
    }
)
export default connect(
    MapStateToProps,
    MapDispatchToProps
)(Car)