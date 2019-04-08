import {fromJS} from "immutable";
import {constants} from ".";

const defaultAuthorState = fromJS({
    articles:[]
});

export default (state=defaultAuthorState,action) =>{
	switch (action.type) {
		case constants.RENEW_ARTICLE:
			return state.set('articles',action.data);
		default:
			return state;
	}
}