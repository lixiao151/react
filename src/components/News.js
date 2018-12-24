import React,{Component} from 'react';
import './New.css';
import {NavLink} from 'react-router-dom';
class News extends Component{
    render(){
        return (
            <div className="news">
                <ul className="zq">
                {/* <li><a href="news.html"><i className="icons">&#xe666;</i><span>新闻资讯</span></a></li> */}
                <li><NavLink to="/jishu"><i className="icons">&#xe666;</i><span>新闻资讯</span></NavLink></li>
                <li><NavLink to="/jishu"><i className="icons">&#xe666;</i><span>服务专区</span></NavLink></li>
                </ul> 
            </div>
        )
    }

}
export default News;