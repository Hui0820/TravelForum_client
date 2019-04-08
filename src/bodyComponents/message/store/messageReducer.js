import {fromJS} from "immutable";
import {constants} from ".";
import {constants as authorConstants} from "../../author/store";

const defaultMessageState = fromJS({
	msgWindowVisible:false,
	userList:[]
})


export default (state = defaultMessageState, action) => {
	switch (action.type) {
		case constants.RECEIVE_USERLIST:
			return state.set('userList',action.data);
		case authorConstants.UPDATE_MSGWINDOWVISIABLE:
			return state.set('msgWindowVisible',action.data);
		case constants.RENEW_MSGWINMODAL_SHOW:
			return state.set('msgWindowVisible',action.data);
		default:
			return state;
	}
}