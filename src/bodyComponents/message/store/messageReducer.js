import {fromJS} from "immutable";
import {constants} from ".";
import {constants as authorConstants} from "../../author/store";

const defaultMessageState = fromJS({
	msgWindowVisible:false,
	msgList:{
		users:{},
		chatMsgs:[],
		unReadCount:0
	}
})


const renewMsgList = (state,action)=>{
	const chatMsg = action.data;
	const originMsgList = state.toJS().msgList;
	const chatMsgs = originMsgList.chatMsgs;
	return {
			users:originMsgList.users,
			chatMsgs:[...chatMsgs,chatMsg],
			unReadCount:originMsgList.unReadCount
		}
}

export default (state = defaultMessageState, action) => {
	switch (action.type) {
		case constants.RECEIVE_USERLIST:
			return state.set('userList',action.data);
		case authorConstants.UPDATE_MSGWINDOWVISIABLE:
			return state.set('msgWindowVisible',action.data);
		case constants.RENEW_MSGWINMODAL_SHOW:
			return state.set('msgWindowVisible',action.data);
		case constants.RECEIVE_MSG_LIST:
			return state.set("msgList",action.data);
		case constants.RECEIVE_MSG:
			const newMsgList = renewMsgList(state,action);
			return state.set("msgList",newMsgList);
		default:
			return state;
	}
}