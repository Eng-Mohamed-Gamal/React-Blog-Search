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
SET_SEARCH_TERM
} from "../Actions/Actions.js"

const  BlogReducer = (state , action)=>{
switch(action.type) {
    case FETCH_BLOG_BEGIN : return {...state , blogsLoading : true}
    case FETCH_BLOG_SUCCESS : return {...state , blogsLoading :false ,  blogs : action.payload  , tmp : action.payload }
    case FETCH_BLOG_FAILED : return {...state , blogsLoading : false , blogsError : true }
    case FETCH_SEARCH_BLOG_BEGIN :return {...state , searchLoading : true}
    case FETCH_SEARCH_BLOG_SUCCESS : return {...state , blogs : action.payload , searchLoading : false}
    case FETCH_SEARCH_BLOG_FAILED : return {...state , searchLoading : false , searchBlogError : true}
    case FETCH_SINGLE_BLOG_BEGIN : return {...state , SingleBlogLoading : true  }
    case FETCH_SINGLE_BLOG_SUCCESS : return {...state , SingleBlogLoading : false , SingleBlog : action.payload  }
    case FETCH_SINGLE_BLOG_FAILED : return {...state , SingleBlogLoading : false , SingleblogError : true }
    case SET_SEARCH_TERM : return {...state , SearchTerm : action.payload}
    default : return state
}
};

export default BlogReducer ;