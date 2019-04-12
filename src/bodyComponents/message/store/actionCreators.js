import {constants} from ".";
import axios from 'axios';
import io from "socket.io-client";
import chat from "../components/chat";


//==================SocketIO====================
/**
 *  Creat a Single object to connect the server
 *  Step 1: before creating the object, test if the object is existed
 *  Step 2: after creating the object, save the object
 */

const initIO = (dispatch,userid)=>{
    if(!io.socket){
        //one socket object means one connection to the server
        io.socket = io("http://localhost:3001");

        //listen the receriveMessage, and receive the msg from the server
        io.socket.on('returnMsg',(chatMsg)=>{
            console.log("from the server: ", chatMsg);
            
            //only if the chatMsgs is to me or from me, save the msg to the databases
            if(userid===chatMsg.from || userid===chatMsg.to){
                console.log(chatMsg);
                dispatch(receiveMsg (chatMsg));
            }
        })
    } 
}

//send msg action by using socketio, not ajax
export const handleSendMsgAction =({from,to,content})=>{
    return dispatch=>{     
        //Send Msg
        io.socket.emit("sendMsg",{from,to,content});
    } 
}

//================AJAX=======================


export const toggleMessageWindowAction= (visible)=>{
    return dispatch =>{
        dispatch({
            type:constants.CHANGE_DRAWER_STATUS,
            data:visible
        })
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

/*
    A async function to get msgList
    where this function will be called? 
     -  After /login      /login/store/actionCreators
     -  After /regiester  /login/store/actionCreators 
     -  After /getuser    /header/store/actionCreators
 */ 
export async function getMsgList(dispatch,userid){
    //create an sokect when getMsgList is called
    initIO(dispatch,userid);
    const response = await axios.get("/msglist");
    const result = response.data;
    if(result.code===1){
        const {users,chatMsgs} = result.data;      
        //dispatch to reducer
        dispatch(receiveMsgList({users,chatMsgs,unReadCount:0}));
    } 
}

const receiveMsgList =({users,chatMsgs,unReadCount})=>{
    return{
        type:constants.RECEIVE_MSG_LIST,
        data:{users,chatMsgs,unReadCount}
    }
}

const receiveMsg = (chatMsg)=>{
    return {
        type:constants.RECEIVE_MSG,
        data:chatMsg
    }
}





