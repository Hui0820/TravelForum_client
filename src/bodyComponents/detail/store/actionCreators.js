import {fromJS} from "immutable";
import {constants} from ".";
import axios from 'axios';

const getDetail = (data) =>({
	type:constants.GET_DETAIL,
	data:data
})

export const getDetailAction =(id)=>{
	return (dispatch)=>{
		axios.get("/api/detail.json?id=" +id).then((res)=>{
			const result = res.data.data[id-1];
			console.log(result);
			dispatch(getDetail(result));
		})
	}
}