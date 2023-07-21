import { createContext, useContext, useEffect, useReducer } from "react"
import Reducer from "../Reducers/BlogReducer"
import axios from "../Api/APi"
import {
    FETCH_BLOG_BEGIN,
    FETCH_BLOG_SUCCESS,
    FETCH_BLOG_FAILED,
    FETCH_SEARCH_BLOG_BEGIN,
    FETCH_SEARCH_BLOG_SUCCESS,
    FETCH_SEARCH_BLOG_FAILED,
    FETCH_SINGLE_BLOG_BEGIN,
    FETCH_SINGLE_BLOG_SUCCESS,
    FETCH_SINGLE_BLOG_FAILED,
    SET_SEARCH_TERM,
    BLOG_URL,
    SEARCH_URL
    } from "../Actions/Actions.js"


    const InitState = {
        // blogs
        blogsLoading : false,
        blogsError : false ,
        blogs : [] ,
        // single
        SingleblogError : false ,
        SingleBlog : [] , 
        SingleBlogLoading : false,
        // search
        searchLoading :false ,
        searchBlogError : false,
        SearchTerm : "",
        tmp :[]

    }

    const BlogsContext = createContext({})
     export  const BlogsProvider = ({children}) => {
        const [state , dispatch] = useReducer(Reducer , InitState)
        const fetchBlogs = async () => {
            dispatch({type : FETCH_BLOG_BEGIN})
            try {
                const Response = await axios.get(BLOG_URL)
                dispatch({type : FETCH_BLOG_SUCCESS , payload :Response.data.posts} )
            }catch(err){
                console.log(err)
                dispatch({type : FETCH_BLOG_FAILED})
            }
        }
        const fetchSingleBlog = async (id)=>{
            dispatch({type: FETCH_SINGLE_BLOG_BEGIN})
         try{
            const Response = await axios.get(`${BLOG_URL}/${id}`)
            dispatch({type : FETCH_SINGLE_BLOG_SUCCESS, payload : Response.data})
        }catch(err){
            console.log(err)
            dispatch({type : FETCH_SINGLE_BLOG_FAILED})
        }
    }
    const fetchSearchBlogs = async (SearchTerm)=>{
        dispatch({type : FETCH_SEARCH_BLOG_BEGIN})
        try{
            const Response = await axios.get(`${SEARCH_URL}${SearchTerm}`)
                dispatch({type : FETCH_SEARCH_BLOG_SUCCESS , payload:Response.data.posts } )
                console.log(Response.data.posts)
            }catch(err){
                dispatch({type : FETCH_SEARCH_BLOG_FAILED})
            }
        }
        const setSearchTerm = (value) =>{
            dispatch({type : SET_SEARCH_TERM , payload  : value})
        }
        
        useEffect(()=>{
            fetchBlogs();
        },[])
        return (
            <BlogsContext.Provider value={{
                ...state,
                fetchSingleBlog,
                fetchSearchBlogs,
                setSearchTerm,
                
            }}>
                {children}
            </BlogsContext.Provider>


         )
        }

        export const useBlogsContext = ()=>{
            return useContext(BlogsContext)
        }
    

