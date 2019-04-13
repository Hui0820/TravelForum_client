import {fromJS} from "immutable";
import {constants} from ".";

const defaultFavArticlesState = fromJS({
    favArticles: []
});

export default (state = defaultFavArticlesState, action) => {
    switch (action.type) {
        case constants.RENEW_FAVARTICLES:
            return state.set('favArticles', action.data);
        default:
            return state;
    }
}