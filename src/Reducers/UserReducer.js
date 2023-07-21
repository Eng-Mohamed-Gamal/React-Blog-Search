import {
FETCH_SINGLE_USER_BEGIN,
FETCH_SINGLE_USER_SUCCESS,
FETCH_SINGLE_USER_FAILED
} from "../Actions/Actions.js"

 const UserReducer = (state , action) =>{
    switch(action.type){
        case FETCH_SINGLE_USER_BEGIN : return {...state , singleUserLoading : true }
        case FETCH_SINGLE_USER_SUCCESS : return {...state , singleUserLoading : false  , userBlog : action.payload }
        case FETCH_SINGLE_USER_FAILED : return {...state , singleUserLoading : false  , singleUserError:true }
        default : return state
    }
}


export default UserReducer ;