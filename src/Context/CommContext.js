import { createContext, useContext, useReducer } from "react"
import reducer   from "../Reducers/CommReducer"
import axios from "../Api/APi"
import {
    FETCH_COMMENTS_BEGIN,
    FETCH_COMMENTS_SUCCESS,
    FETCH_COMMENTS_FAILED,
    COMMENT_BY_POSR_URL
    } from "../Actions/Actions.js"

    const initState = {
        commentLoading : false ,
        commentBlog : [] ,
        commentError : false
    }

    const commentContext = createContext({});
    export const CommentProvider = ({children})=>{
        const [state , dispatch] = useReducer(reducer , initState)
        const fetchComments = async (id) => {
            dispatch({type : FETCH_COMMENTS_BEGIN})
            try {
                const response = await axios.get(`${COMMENT_BY_POSR_URL}/${id}`) 
                dispatch({type : FETCH_COMMENTS_SUCCESS ,  payload : response.data.comments })
            }catch(err){
                console.log(err)
                dispatch({type : FETCH_COMMENTS_FAILED})
            }
        }
        return(
            <commentContext.Provider value={{
                ...state,
                fetchComments
            }} >
                {children}
            </commentContext.Provider>
        )
    }

    export const useCommentContext = () =>{
        return useContext(commentContext)
    }