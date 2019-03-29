import axios from 'axios';
import {constants} from ".";
import {fromJS} from "immutable";


const renewDiaryCardList = (data)=>({
	type:constants.RENEW_DIARY_CARD_LIST,
	data:fromJS(data),
	totalPage: Math.ceil(data.length/6)
})

const renewPhotoSlideList = (data)=>({
	type: constants.RENEW_PHOTO_SLIDE_LIST,
	data: fromJS(data)
})


export const handleGetCardsAction = ()=>{
	return (dispatch) =>{
		// axios.get('api/diaryCard.json').then((res)=>{
		// 	const data = res.data.data;
		// 	console.log(data);
		// 	dispatch(renewDiaryCardList(data));
		// }).catch((err)=>{
		// 	console.log(err);
		// })
		axios.get('/fetchAll').then((res)=>{
			const data = res.data.data;
			dispatch(renewDiaryCardList(data));

		}).catch((err)=>{
			console.log(err);
		})
	}
}

export const pageChangeAction = (page)=>{
	return{
		type:constants.RENEW_PAGE,
		data:page
	}
}

export const handleGetSlideAction = () => {
	return (dispatch) =>{
		axios.get('api/photoSlide.json').then((res)=>{
			const data = res.data.data;
			dispatch(renewPhotoSlideList(data));
		}).catch((err)=>{
			console.log(err);
		})
	}
}
