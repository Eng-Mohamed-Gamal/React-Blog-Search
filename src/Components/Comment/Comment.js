import { USER_URL } from '../../Actions/Actions'
import axios from '../../Api/APi'
import React, { useEffect, useState } from 'react'

export default function Comment({comm}) {

    const [post , setPost] = useState({})
    useEffect(()=>{
        const fetchUsrsByComments = async (id) =>{
            const response = await axios.get(`${USER_URL}/${id}`)
            setPost(response.data)
        } 
        fetchUsrsByComments(comm?.user?.id)
        console.log(post)
    },[])


  return (
<div className="comment"  key={comm?.user?.id}>
    <img src={post?.image} alt="" />
    <div className="go">
        <p> City :  {post?.address?.city}</p>
        <p> Domain :  {post?.domain}</p>
    </div>
</div>
  )
}
