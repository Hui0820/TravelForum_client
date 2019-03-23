import { constants as postConstants } from "../../../bodyComponents/post/store";
import {constants as headerconstants} from '.';
import axios from 'axios';
// import { fromJS } from "immutable";

const updateAvatar = (data) => {
  return {
    type: headerconstants.UPDATE_AVATAR,
    data
  }
}

const errMsg = (msg) => {
  return {
    type: headerconstants.ERROR_MSG,
    data: msg
  }
}

export const showAccessModal = () => {
  return {
    type: postConstants.ACCESS_DENIED_MODAL
  };
};

export const handleLogoutAction =() =>{
  return {
    type:headerconstants.LOG_OUT
  }
}

export const setLoginAction = () => {
  return {
    type: headerconstants.LOGIN_SET
  }
}

export const handleSearchValAction = (val)=>{
  return{
    type:headerconstants.RENEW_SEARCH_VAL,
    data:val
  }
}

export const handleUpdateAvatarAction = (userid)=>{
  return (dispatch) => {
    axios.post('/updateAva', {
      userid
    }).then(response => {
      const result = response.data;
      console.log(result);
      if (result.code){
        dispatch(updateAvatar(result.data));
      } else {
        dispatch(errMsg(result.updAvaMsg));
      }
    })
  }
}


