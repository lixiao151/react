import React from 'react';
import {Route,Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
let AuthUser=({
component:Component,auth, ...rest
})=>(
    <Route {...rest} render={(props)=>(
        auth ?
        <Component {...props} authEr={auth}/> :
        <Redirect to="/login" />
    )}/>
)
let initMapStateToProps=state=>({
    auth:state.user.length?state.user:0
})
export default connect(
    initMapStateToProps
)(AuthUser);