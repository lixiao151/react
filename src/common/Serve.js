import React from 'react';
import './Serve.css';
import {NavLink} from 'react-router-dom';
let Serve=(props)=>(
    <div>
       <ul className="vip_tab">
		   {/* <li className="active"><a href="help.html">常见问题</a></li>	 */}
		   <li className="active"><NavLink to='/jishu'>常见问题</NavLink></li>	
		   <li className="active"><NavLink to='/jishu'>VIP问题</NavLink></li>	
		</ul>
    </div>
)
export default Serve;