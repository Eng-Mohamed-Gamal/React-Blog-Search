import { createContext, useContext, useReducer } from "react"
import reducer from "../Reducers/UserReducer"
import axios from "../Api/APi"
import {
    FETCH_SINGLE_USER_BEGIN,
    FETCH_SINGLE_USER_SUCCESS,
    FETCH_SINGLE_USER_FAILED,
    USER_URL
    } from "../Actions/Actions.js"



const initState =  {
    userBlog : [],
    singleUserLoading : false,
    singleUserError : false
}


const userContext = createContext({})
 export  const UserProvider = ({children})=>{
    const [state , dispatch] = useReducer(reducer , initState)
    const fetchSingleUser = async (id) =>{
        dispatch({type : FETCH_SINGLE_USER_BEGIN})
        try {
            const response =await axios.get(`${USER_URL}/${id}`)
            dispatch({type : FETCH_SINGLE_USER_SUCCESS , payload : response.data})
        }catch(err){
            console.log(err)
            dispatch({type : FETCH_SINGLE_USER_FAILED})
        }
    }
    return (
        <userContext.Provider value={{
            ...state,
            fetchSingleUser
        }}>
            {children}
        </userContext.Provider>
    )
}

export const useUserContext = () =>{
    return useContext(userContext)
}
