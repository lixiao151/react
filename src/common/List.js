import React from 'react';
import './List.css';
import {NavLink} from 'react-router-dom';
import querystring from 'query-string';
import {connect} from 'react-redux';
import * as types from '../store/type';
let List=({list,dataName,additem})=>(
    <div className="ztmc">
    <h2>产品中心<NavLink to="/product"><i className="icons">&#xe60a;</i></NavLink></h2>
    <ul className="ztmc_list">
        {  
            list.map((item,index)=>(
                <li key={item.id}>
                {/* <a href="pro_detail.html"><div className="img"><img src={img1} alt=""/></div></a> */}
                <NavLink to={{
                    pathname:'/detail/'+item.id,
                    search:querystring.stringify({
                        dataName
                    })
                }}><div className="img"><img src={item.img} alt=""/></div></NavLink>
                <div className="prolist_info">
                    <h4>{item.name}</h4>
                    <p className="grey">{item.yprice}</p>
                    <p className="red">{item.price}</p>
                    {/* <a className="add" href="###" onClick={()=>{additem(item)}}><i className="icons">&#xe60b;</i></a> */}
                    <NavLink to="/car" onClick={()=>{additem(item)}} className="add" href="###"><i className="icons">&#xe60b;</i></NavLink>
                </div>
            </li>
            ))
        }
    
        
    </ul>
</div>
);
let MapStateToProps=(state)=>({
    buy:state.buycar
})
let MapDispatchToProps=(dispatch)=>({
    additem:(item)=>{dispatch({
        type:types.ADD_ITEM,
        payload:item
    })}
})
export default connect(
    MapStateToProps,
    MapDispatchToProps
)(List);