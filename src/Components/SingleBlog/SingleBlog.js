import React, { useEffect , useState } from 'react'
import { useBlogsContext } from '../../Context/BlogContext'
import { useUserContext } from '../../Context/UserContext';
import { useCommentContext } from '../../Context/CommContext';
import { NavLink, useParams } from 'react-router-dom';
import Loder from '../Loder/Loder';
import Comment from '../Comment/Comment';

export default function SingleBlog() {
const {fetchSingleBlog , SingleBlog ,SingleBlogLoading , tmp} = useBlogsContext();
const {fetchSingleUser , userBlog} = useUserContext();
const {fetchComments , commentBlog} = useCommentContext()
const {id} = useParams() ;


useEffect(()=>{
fetchSingleBlog(id);
if(SingleBlog.userId)fetchSingleUser(SingleBlog.userId)
if(SingleBlog.id)fetchComments(SingleBlog.id)
}, [id , SingleBlog.userId , SingleBlog.id])


if(SingleBlogLoading ){return <Loder></Loder>}


  return (
<div className="single">
<div className="static">
<div className="box">
<h2>BLog Details</h2>
</div>
 </div>
<div className="container">
  <div className="all">
    <div className="info">
   <div className="gr">
<div className="flex">
<span><i class="fa-regular fa-user"></i></span>
    <span>{userBlog?.firstName}</span>
    <span>{userBlog?.lastName}</span>
</div>
<div className="flex">
  <span><i class="fa-regular fa-comment"></i>  </span>
  <span>{commentBlog?.length}</span>
</div>
<div className="flex">
  <span><i class="fa-solid fa-heart"></i>  </span>
  <span>{SingleBlog?.reactions}</span>
</div>
   </div>
   <p>{SingleBlog.body}</p>
   <div className="tags">
    <h3>popular tags : {SingleBlog?.tags?.map((tag , index) => {return (<span key={index}>{tag}</span>)})}</h3>
   </div>
   <div className="img">
    <img src={userBlog?.image} alt="" />
    <div className="con">
      <p><span>{userBlog.firstName}</span>  <span className="two">{userBlog?.lastName}</span>  </p>
      <p>email : {userBlog?.email}</p>
      <p>userName : {userBlog?.username}</p>
      <p>Addrress : {userBlog?.address?.address}</p>
    </div>
   </div>
   <div className="comments">
    <h2>Comments</h2>
    {commentBlog.map((comm , index)=>{
      return <Comment comm={comm} key={index} ></Comment>
    })}
   </div>
    </div>
    <div className="news">
      <h2>Recent News</h2>
      <div className="father">
      {tmp.slice(0,30).map((tmp , index)=>{
        return (
          <div className="tmp" key={index}>
            <NavLink to={`/Singleblog/${tmp.id}`} >{tmp.title}</NavLink>
            <span><i class="fa-regular fa-heart"></i>  {tmp.reactions}  </span>
          </div>
        )
      })}
      </div>
    </div>
  </div>
</div>

</div>
  )
}
