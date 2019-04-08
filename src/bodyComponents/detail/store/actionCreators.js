import {constants} from ".";
import axios from 'axios';
import moment from 'moment';

const getDetail = (data) =>({
	type:constants.GET_DETAIL,
	data:{
		post_title:data.post_title,
		post_content:data.post_content,
		post_tags:data.post_tags,
		author:data.username,
		views:data.views,
		likes:data.likes,
		comments:data.comments,
		post_time:moment(data.post_time).format('lll'),
		avatar:data.avatar,
		user_id:data.user_id
	}
})

export const getDetailAction =(id)=>{
	return (dispatch)=>{
		// axios.get("/api/detail.json?id=" +id).then((res)=>{
		// 	const result = res.data.data[id-1];
		// 	console.log(result);
		// 	dispatch(getDetail(result));
		// })

		axios.get("/detail/" +id).then((res)=>{
			const result = res.data;
			console.log(result);
			dispatch(getDetail(result));
		})
	}
}