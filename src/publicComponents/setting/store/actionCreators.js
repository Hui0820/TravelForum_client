import axios from 'axios';
import {constants} from ".";
// import Cookie from 'js-cookie';

const renewUserImage = (data)=>{
    return{
        type:constants.RENEW_USER_IMG,
        data
    }
}

const rstSuccess = (msg) => ({
	type: constants.RST_SUCCESS,
	data: msg
})

const errMsg = (msg) => ({
	type: constants.ERROR_MSG,
	data: msg
})

const clearMsg = () => ({
	type: constants.CLEAR_MSG
})

export const handleClearMsgAction = () => {
	return dispatch => {
		dispatch(clearMsg());
	}
}

export const handleUploadAction = (blob) => {
    return (dispatch) => {
        //here upload the image to Cloudinary
        let formData = new FormData();
        formData.append("file",blob);
        formData.append("upload_preset",constants.CLOUNDINARY_UPLOAD_PRESET);

        axios({
            url:constants.CLOUNDINARY_URL,
            method:"POST",
            headers:{
                'Content-Type':'application/x-www-form-urlencoded'
            },
            data:formData
        }).then(function(res){
            console.log(res);
            const user_imgUrl = res.data.secure_url;
            axios.post("/profile",{user_imgUrl:user_imgUrl}).then(response=>{
               const resResult = response.data.data;
               dispatch(renewUserImage(resResult.avatar));
            })
        })

    }
}

export const handleResetPswdAction = (pswd) => {
	const {password1, password2} = pswd;
	
	return dispatch => {
		if (!password1 || !password2) {
			dispatch(errMsg('password can not be empty'));
		} else if (password1 !== password2) {
			dispatch(errMsg('passwords do not match'));
		} else {
			axios.post('/reset', {
				password: password1,
			}).then((res) => {
				const result = res.data;
				if (result.code) {
					dispatch(rstSuccess(result.rstMsg));
				} else {
					dispatch(errMsg(result.rstMsg));
				}
			})
		}
	}
}