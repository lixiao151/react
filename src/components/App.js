import React, { Component } from 'react';
import Home from './Home';
import Footer from '../common/Footer'
import {Switch,Route,Redirect} from 'react-router-dom';
import Car from './Car.js';
import Detail from './Detail.js';
import Jishu from './Jishu.js';
import Login from './Login.js';
import Reg from './Reg.js';
import Product from './Product.js';
import User from './User.js';
import Problem from './Problem.js';
import Error from '../common/Error';
import Order from './Order.js';
import Loading from '../common/Loading.js';
import {connect} from 'react-redux';
import * as types from '../store/type';
import AuthUser from '../guard/AuthUser';
// import AuthCar from "../guard/AuthCar";
class App extends Component {
    componentWillReceiveProps(nextProps){    //路由监听
        if (this.props.location.pathname!==nextProps.location.pathname){
            // window.scrollTo(0,0);   //实现路由一旦跳转，页面在最顶端
            let routerPath = nextProps.location.pathname;
            if(/home|jishu|login|reg|product|car|problem|user/.test(routerPath)){
                this.props.viewFoot(true);
            }
            if(/order|detail/.test(routerPath)){
                this.props.viewFoot(false)
            }
        }
    }
  render() {
    return (
      <>
        {this.props.bLoading && <Loading/>}
        <Switch>
            <Route path='/home' component={Home} />
            <Route path='/detail/:id' component={Detail} />
            <Route path='/jishu' component={Jishu} />
            <Route path='/login' component={Login} />
            <Route path='/reg' component={Reg} />
            <Route path='/order' component={Order}/>
            <Route path='/problem' component={Problem} />
            <Route path='/product' component={Product} />
            <AuthUser
                path="/user"
                component={User}
            />
            <Route
                path="/car"
                component={Car}
            />
            <Redirect exact from='/' to="/home" />
            <Route component={Error}/>
        </Switch>
         {this.props.bFoot && <Footer/>}
      </>
    );
  }
}
let initMapStateToProps =(state)=>({
    bLoading:state.bLoading,
    bFoot:state.bFoot,
});
let initMapDispatchToProps=(dispatch)=>({
    viewFoot:(bl)=>{dispatch({type:types.VIEW_FOOT,payload:bl})}
});
export default connect(
    initMapStateToProps,
    initMapDispatchToProps
)(App);
