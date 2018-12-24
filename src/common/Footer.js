import  React from 'react';
import './Footer.css';
import {NavLink} from 'react-router-dom';
let Footer=(props)=>(
    <div className="footer">
    <ul>
         <li><NavLink to="/home" activeClassName="active"><p><i className="icons">&#xe65c;</i></p><h4>首页</h4></NavLink></li>
         {/* <li><a href="products.html"><p><i className="icons">&#xe6d0;</i></p><h4>产品/方案</h4></a></li> */}
         <li><NavLink to="/product" activeClassName="active"><p><i className="icons">&#xe6d0;</i></p><h4>产品/方案</h4></NavLink></li>
         {/* <li><a href="help.html"><p><i className="icons">&#xe6c9;</i></p><h4>技术支持</h4></a></li> */}
         <li><NavLink to="/jishu" activeClassName="active"><p><i className="icons">&#xe6c9;</i></p><h4>技术支持</h4></NavLink></li>
         {/* <li><a href="shopcar.html"><p><i className="icons">&#xe601;</i></p><h4>购物车</h4></a></li> */}
         <li><NavLink to="/car" activeClassName="active"><p><i className="icons">&#xe601;</i></p><h4>购物车</h4></NavLink></li>
         {/* <li><a href="my.html"><p><i className="icons">&#xe605;</i></p><h4>我的</h4></a></li> */}
         <li><NavLink to="/user" activeClassName="active"><p><i className="icons">&#xe605;</i></p><h4>我的</h4></NavLink></li>
    </ul>
 </div>
)

export default Footer;