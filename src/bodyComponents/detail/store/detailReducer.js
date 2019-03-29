import {fromJS} from "immutable";
import {constants} from ".";

const defaultDetailState = fromJS({
	article:{
		post_title:"",
		post_content:"",
		post_tags:[],
		author:"",
		views:0,
		likes:0,
		comments:0,
		post_time:0
	}
});

export default (state=defaultDetailState,action) =>{
	switch (action.type) {
		case constants.GET_DETAIL:
			console.log(action.data);
			return state.set("article",action.data)
		default:
			return state;
	}
}