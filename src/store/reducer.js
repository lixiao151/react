import * as types from './type';
// import querystring from 'query-string';
let reducer = (state,action)=>{
    let {type,payload} = action;
    switch(type){
        case types.VIEW_FOOT:
        return Object.assign({},state,{
            bFoot:payload
        });
        case type.VIEW_LOADING:
        return Object.assign({},state,{
            bLoading:payload
        });
        case types.UPDATE_HOME:
        return Object.assign({},state,{
            home: payload
        });
        case types.UPDATE_FOLLOW:
        return Object.assign({},state,{
          follow: payload
        });
        case types.CLEAR_HOME:
        return Object.assign({},state,{
            home: []
        });
        case types.LOGIN:
        console.log(payload)
        return Object.assign({},state,{
            login: payload
        });
        case types.UPDATE_USER:
        // console.log(payload)
        return Object.assign({},state,{
          user: payload
        });
        case types.UPDATE_DETAIL:
        return Object.assign({},state,{
          detail: payload
        });

        case types.ADD_ITEM:
        // console.log(payload)
       let arr =[...state.buycar];
       let find=false;
       arr.forEach((item,index)=>{
            if(item.id===payload.id){
                item.number++;
                find=true;
            }
       });
       if(!find){
           payload.number=1;   //向payload对象加入number属性，属性值为1
           arr.push(payload);
       };
       return Object.assign({},state,{
        buycar:arr
       })
     case types.CHANGE_ITEM:
    //   let arr1=[...state.buycar];
    //   console.log(arr1);
    state.buycar.map((item,index)=>{
        if(item.id===payload[0]){
            item.number+=payload[1];
        }
    })
    return  Object.assign({},state,{
        buycar:[...state.buycar]
     })
     case types.CLEAR_ITEM:
    //  console.log(payload);
     state.buycar.map((item,index)=>{
         if(item.id===payload){
            state.buycar.splice(index,1);
         }
     })
     return Object.assign({},state,{
         buycar:[...state.buycar]
     });
     case types.CLEAR_ALL:
     return Object.assign({},state,{
        buycar: payload
      });
        default:
        return state;
    }
}
export default reducer;