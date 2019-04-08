import {combineReducers} from "redux-immutable";
import {headerReducer} from "../publicComponents/header/store";
import {postReducer} from "../bodyComponents/post/store";
import {loginReducer} from "../bodyComponents/login/store";
import {homeReducer} from "../bodyComponents/home/store";
import {detailReducer} from "../bodyComponents/detail/store";
import {searchReducer} from "../bodyComponents/search/store";
import {settingReducer} from "../publicComponents/setting/store";
import {messageReducer} from "../bodyComponents/message/store";
import {authorReducer} from "../bodyComponents/author/store";


//guarantee the state is immutable
const reducer = combineReducers({
	header: headerReducer,
	post: postReducer,
	login: loginReducer,
	home: homeReducer,
	detail:detailReducer,
	search:searchReducer,
	setting:settingReducer,
	message:messageReducer,
	author:authorReducer
});

export default reducer;
