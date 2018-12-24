import React,{Component} from 'react';
import './Product.css';
import List from '../common/List.js';
import * as types from '../store/type';
import {connect} from 'react-redux';
import {asyncActionList} from '../store/asyncAction';
import {NavBar, Icon} from "antd-mobile";
let sTop=0;
class Product extends Component{
    componentDidMount(){
        this.props.getFollow();
        window.scrollTo(0,sTop)
    };
    componentWillUnmount(){
        sTop=document.documentElement.scrollTop;
    }
    render(){
        return(
           <div className="warp" style={{marginBottom:"4rem"}}>
                {/* <h2 onClick={()=>{this.props.history.go(-1)}} style={{height:"3rem",background:"#17ce71",lineHeight:"3rem"}}>BACK</h2> */}
                <NavBar style={{background:"#3095ff",color:"#fff"}}
                    mode="light"
                    icon={<Icon type="left"  onClick={()=>{this.props.history.go(-1)}}/>}
                    // onLeftClick={() => console.log('onLeftClick')}
                    rightContent={[
                        <Icon key="0" type="search" style={{ marginRight: '16px'}} />,
                        <Icon key="1" type="ellipsis" />,
                    ]}>商品列表
                    </NavBar>
                <List list={this.props.follow} dataName="follow" />
            </div>
            
        )
    }
};
let initMapStateToProps=(state)=>({
    follow:state.follow
});
let initMapDispatchToProps=(dispatch)=>({
    getFollow:()=>{
        asyncActionList(
            'data/follow.json',
            dispatch,
            types.UPDATE_FOLLOW
        )
    }
})

export default connect(
    initMapStateToProps,
    initMapDispatchToProps
)(Product);