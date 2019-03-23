import {fromJS} from "immutable";
import {constants} from ".";

const defaultSearchState = fromJS({

})

export default (state = defaultSearchState, action) => {
	switch (action.type) {
		default:
			return state;
	}
}

