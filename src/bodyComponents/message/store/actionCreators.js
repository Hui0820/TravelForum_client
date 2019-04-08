import {constants} from ".";
import axios from 'axios';

const receiveUserList = (userList)=>{
    return {
        type:constants.RECEIVE_USERLIST,
        data:userList
    }
}

export const toggleMessageWindowAction= (visible)=>{
    return dispatch =>{
        dispatch({
            type:constants.CHANGE_DRAWER_STATUS,
            data:visible
        })
    }
}

//asyc action to get the userList
export const getUserListAction = ()=>{
    return async dispatch=>{
        const response = await axios.get('/userlist');
        const result = response.data;
        console.log(result);
        if(result.code ===1){
            dispatch(receiveUserList(result.data));
        } 
    }
}

//action to show the message window
export const handleMsgWinShowAction = (visible)=>{
    return dispatch=>{
        dispatch({
            type:constants.RENEW_MSGWINMODAL_SHOW,
            data:visible
        })
    }
}







