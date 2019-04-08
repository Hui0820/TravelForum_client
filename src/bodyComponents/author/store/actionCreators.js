import {constants} from ".";
import axios from "axios";

const getArticles = (data)=>({
    type:constants.RENEW_ARTICLE,
    data:data
})


export const handleGetAuthorAction = (userid)=>{
    return dispatch=>{
      axios.get('/author/' + userid).then((res)=>{
          const result = res.data;
          dispatch(getArticles(result.data));
      })
    }
}


export const handleShowMsgWindowAction = ()=>{
    return dispatch=>{
        dispatch({
            type:constants.UPDATE_MSGWINDOWVISIABLE,
            data:true
        })
    }
}