import React,{Component} from 'react';
import List from '../common/List.js';
import Banner from './Banner';
import Jiejue from './Jiejue.js';
import News from './News';
import {connect} from 'react-redux';
import {asyncActionList} from "../store/asyncAction";
import * as types from '../store/type';
import Qipao from './qipao';
let sTop=0;
class Home extends Component{
    componentDidMount(){
        this.props.getHome();
        window.scrollTo(0,sTop)
      };
    componentWillUnmount(){
        sTop=document.documentElement.scrollTop;
    }
    render(){
        return (
            <React.Fragment>
                <Qipao/>
               <Banner></Banner>
               <Jiejue></Jiejue>
               <List list={this.props.home} dataName="index"></List> 
               <News></News>
            </React.Fragment>)
    }}
  let initMapStateToProps=(state)=>({
    home:state.home
  })
  let initMapDispatchToProps=(dispatch)=>({
    getHome:()=>{asyncActionList(
      'data/index.json',
      dispatch,
      types.UPDATE_HOME
    )}
  });
export default connect(
    initMapStateToProps,
    initMapDispatchToProps
)(Home);