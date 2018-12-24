import React from 'react';
import {Route,Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
let AuthCar=({component:Component,auth,userData,...rest})=>(
    <Route {...rest} render={(props)=>(
        auth?
        <Component {...props}/>:
        <Redirect to="/login"/>
    )} 
    
    />
)
let MapStateToProps=state=>({
    auth:state.user.auth,
    userData:state.user.userData
})
export default connect(
    MapStateToProps
)(AuthCar)