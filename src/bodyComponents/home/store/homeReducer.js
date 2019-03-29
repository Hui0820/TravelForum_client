import {fromJS} from "immutable";
import {constants} from ".";
import {constants as postConstants} from '../../post/store';

const defaultHomeState = fromJS({
	diaryCardList: [],
	page: 0,
	totalPage: 1,
	photoSlideList: []
})

export default (state = defaultHomeState, action) => {
	switch (action.type) {
		case constants.RENEW_DIARY_CARD_LIST:
			return state.merge({
				diaryCardList: action.data,
				totalPage: action.totalPage
			})
		case constants.RENEW_PAGE:
			return state.set('page', action.data);
		case constants.RENEW_PHOTO_SLIDE_LIST:
			return state.set('photoSlideList', action.data);
		case postConstants.RENEW_CARDLIST:
			return state.set('diaryCardList', action.data);
		default:
			return state;
	}
}