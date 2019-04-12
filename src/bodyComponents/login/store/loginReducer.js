import {fromJS} from "immutable";
import {constants} from ".";


const defaultLoginUser = fromJS({
	username: '',
	email: '',
	registerMsg: '',
	loginMsg: '',
	loginUser: {}
})

export default (state = defaultLoginUser, action) => {
	switch (action.type) {
		case constants.REGISTER_FAILURE:
			return state.set('registerMsg', action.data);
		case constants.ERROR_MSG:
			return state.set('registerMsg', action.data);
		case constants.AUTH_SUCCESS:
			return state.merge({
				username: action.data.username,
				email: action.data.email
			})
		case constants.CLEAR_MSG:
			return state.merge({
				registerMsg: '',
				loginMsg: ''
			});
		case constants.LOGIN_SUCCESS:
			return state.merge({
				username: action.data.username,
				email: action.data.email
			})
		case constants.ERROR_LOGINMSG:
			return state.set('loginMsg', action.data);
		case constants.RENEW_LOGIN_USER:
			return state.set('loginUser', action.data);
		default:
			return state;
	}
}
