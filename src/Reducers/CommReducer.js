import {
FETCH_COMMENTS_BEGIN,
FETCH_COMMENTS_SUCCESS,
FETCH_COMMENTS_FAILED,
COMMENT_BY_POSR_URL
} from "../Actions/Actions.js"

const reducer = (state , action) =>{
    switch(action.type){
        case FETCH_COMMENTS_BEGIN : return {...state , commentLoading : true}
        case FETCH_COMMENTS_SUCCESS : return {...state , commentLoading : false , commentBlog : action.payload}
        case FETCH_COMMENTS_FAILED : return {...state , commentLoading : false , commentError : true}
        default : return state 
    }
}

export default reducer ;