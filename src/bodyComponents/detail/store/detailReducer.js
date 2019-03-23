import {fromJS} from "immutable";
import {constants} from ".";

const defaultDetailState = fromJS({
	title:'',
	content:''
});


export default (state=defaultDetailState,action) =>{
	switch (action.type) {
		case constants.GET_DETAIL:
			return state.merge({
				title:action.data.title,
				content:action.data.content
			})
		default:
			return state;
	}
}