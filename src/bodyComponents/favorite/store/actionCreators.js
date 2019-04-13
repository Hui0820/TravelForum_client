import {constants} from ".";
import axios from "axios";

const getFavArticles = (data) => ({
    type:constants.RENEW_FAVARTICLES,
    data:data
})


export const getFavArticlesAction = (userid) => {
    return dispatch => {
        axios.get('/favorite/' + userid).then((res)=>{
            const result = res.data;
            console.log(result.data);
            dispatch(getFavArticles(result.data));
        })
    }
}