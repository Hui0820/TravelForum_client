import {fromJS} from "immutable";
import {constants as headerConstants} from ".";
import {constants as loginConstants} from "../../../bodyComponents/login/store";


const defaultHeaderState = fromJS({
	isLogin: false,
	searchVal:''
});

export default (state = defaultHeaderState, action) => {
	switch (action.type) {
		case headerConstants.LOG_IN:
			return state.set("isLogin", true);
		case loginConstants.MODIFY_LOGIN_STATUS:
			return state.set("isLogin", true);
		case headerConstants.LOG_OUT:
			return state.set("isLogin",false);
		case headerConstants.LOGIN_SET:
			return state.set("isLogin", true);
		case headerConstants.RENEW_SEARCH_VAL:
			return state.set("searchVal",action.data);
		default:
			return state;
	}
};
