import { constants as postConstants } from "../../../bodyComponents/post/store";
import {constants as headerconstants} from '.';
import axios from 'axios';
import {constants} from "../../../bodyComponents/login/store";
import {constants as loginConstants} from "../../../bodyComponents/login/store";
import {actionCreators as messageActionCreators} from "../../../bodyComponents/message/store";


const updateAvatar = (data) => {
  return {
    type: headerconstants.UPDATE_AVATAR,
    data
  }
}

const renewLoginUser = (user)=>({
  type:loginConstants.RENEW_LOGIN_USER,
  data:user
})


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
      if (result.code){
        dispatch(updateAvatar(result.data));
      } else {
        dispatch(errMsg(result.updAvaMsg));
      }
    })
  }
}

export const handleUpdateLoginUserAction = (userid)=>{
  return (dispatch) => {
    axios.post('/getuser', {
      userid
    }).then(response => {
      const result = response.data;
      if (result.code){
        dispatch(renewLoginUser(result.data));
        messageActionCreators.getMsgList(dispatch,result.data._id);
      }
      
    })
  }
}



