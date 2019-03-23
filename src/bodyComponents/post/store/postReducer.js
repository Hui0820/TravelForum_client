import { fromJS } from "immutable";
import { constants } from ".";

//set the access Modal state as false, when click the Post menu
const defaultPostState = fromJS({
  accessModalVisible: false,
  tagsList:[]
});

export default (state = defaultPostState, action) => {
  switch (action.type) {
    case constants.ACCESS_DENIED_MODAL:
      return state.set("accessModalVisible", true);
    case constants.POST_OK:
      return state.set("accessModalVisible", false);
    case constants.POST_CANCEL:
      return state.set("accessModalVisible", false);
    case constants.RENEW_TAGSLIST:
      return state.set("tagsList",action.data);
    default:
      return state;
  }
};

