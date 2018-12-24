import React from 'react';
import './Detail.css';
import querystring from 'query-string';
import {asyncActionDetail} from "../store/asyncAction";
import {NavLink} from 'react-router-dom';
import * as types from "../store/type";
import {connect} from "react-redux";
import Banner from './Banner';
import {NavBar, Icon} from 'antd-mobile';
class Detail extends React.Component{
    componentDidMount(){
        let id=this.props.match.params.id;
        let dataName=querystring.parse(this.props.location.search).dataName;
        if(dataName==="follow"){
            this.props.getDetail(dataName,id-13);
        }else{
            this.props.getDetail(dataName,id-1);
        }
        
      }
    render(){
        let {detail,add} =this.props;
        // console.log(detail)
        return(
        <>
        {/* <h2 onClick={()=>{this.props.history.go(-1)}} style={{background:'#17ce71',height:'3rem',lineHeight:'3rem'}}>BACK<span style={{marginLeft:"8rem"}}>详情页</span></h2> */}
        <NavBar style={{background:"#3095ff",color:"#fff"}}
                    mode="light"
                    icon={<Icon type="left"  onClick={()=>{this.props.history.go(-1)}}/>}
                    // onLeftClick={() => console.log('onLeftClick')}
                    rightContent={[
                        <Icon key="0" type="search" style={{ marginRight: '16px'}} />,
                        <Icon key="1" type="ellipsis" />,
                    ]}>商品详情
                    </NavBar>
        <Banner/>
        <div className="wrap">
         </div>
         <div style={{width:"100%",textAlign:"center"}}>
            <img src={detail.img} alt="" style={{width:'22rem',height:"20rem"}}/>
            <h2>{detail.name} 价格： <span style={{color:"red"}}>{detail.price}</span></h2>

         </div>
         <div className="detail-footer">
             <div className="foot_l"><p>售价:<span className="red" >{detail.price}</span></p></div>
             <div className="foot_r"><NavLink to="/car" onClick={()=>{add(detail)}} style={{background:"#3095ff"}}  className="jrgwc">加入购物车</NavLink></div>
         </div>
        </>
        )
    }
};
let initMapStateToProps=(state)=>({
    detail:state.detail
  });
  
  let initMapDispatchToProps=(dispatch)=>({
    getDetail:(dataName,index)=>dispatch(asyncActionDetail(
      'data/'+dataName+'.json',
      dispatch,
      types.UPDATE_DETAIL,
      index
    )), 
    add:(det)=>{
        console.log(det)
        dispatch({
            type:types.ADD_ITEM,
            payload:det
        })
    }
  });
  
    

  
export default connect(
    initMapStateToProps,
  initMapDispatchToProps
)(Detail);