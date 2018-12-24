import * as types from './type';
// import querystring from 'query-string';
export let asyncActionList=(url,dispatch,type)=>{
    dispatch({type:types.VIEW_LOADING,payload:true});
    fetch(
        url,
    ).then(
        res=>res.json()
    ).then(
        data=>{
            dispatch({type:types.VIEW_LOADING,payload:false})
            dispatch({type:type,payload:data})
        }
    )
};
export let asyncActionDetail=(url,dispatch,type,index)=>{
    fetch(
      url
    ).then(
      res=>res.json()
    ).then(
      data=>{
        dispatch({type:types.VIEW_LOADING,payload:false});
        dispatch({type:type,payload:data[index]})
      }
    );
    return {type:types.VIEW_LOADING,payload:true};
  };
  export let asyncActionAuth=(url,type)=>(dispatch,getState)=>{
    //   let obj={username,password};
      dispatch({type:types.VIEW_LOADING,payload:true});
      fetch(
          url,
          {
            header:{
                "Content-type":"application/x-www-form-urlencoded"
            },
            mode:'cors',
        }
      ).then(
          res=>res.json()
      ).then(
          data=>{
            //   console.log(data.nu);
              dispatch({type:types.VIEW_LOADING,payload:false});
              dispatch({type:type,payload:data.da});
              dispatch({type:types.LOGIN,payload:data.nu})
          }
      )
  }