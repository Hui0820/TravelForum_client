import {constants} from ".";
import {fromJS} from "immutable";
import axios from 'axios';

export const handleOkAction = () => {
	return dispatch =>
		dispatch({
			type: constants.POST_OK
		})
};

export const handleCancelAction = () => {
	return {
		type: constants.POST_CANCEL
	};
};


export const handleRenewTagsListAction = (tags) => {
	return dispatch =>
		dispatch({
			type: constants.RENEW_TAGSLIST,
			data: tags
		})
}

//ajax request
export const handlePostOkAction = (postData,diaryCardList) => {
	const {title, tags, content, postImgUrl} = postData;
	const oldDiaryCardList = diaryCardList.toJS();
	return dispatch => {
		axios.post('/post', {
			post_title: title,
			post_tags: tags,
			post_content: content,
			post_imgURL: postImgUrl
		}).then(response => {
			const result = response.data.data;
			const newPostData = {
				id: result.post_id,
				cover_imgUrl: result.cover_imgURL,
				user_imgUrl: result.avatar,
				title: result.post_title,
				author: result.username,
				likes: result.likes,
				views: result.views,
				comments: result.comments,
				postTime:result.post_time
			}

			const renewDiaryData= [newPostData,...oldDiaryCardList];
			// console.log(renewDiaryData);

			dispatch({
				type: constants.RENEW_CARDLIST,
				data: fromJS(renewDiaryData)
			})


			//TODO
			//dispatch the postData to some reducers.
			//dispatch()

		})
	}
}