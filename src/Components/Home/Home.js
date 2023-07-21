import React, { useState } from 'react'
import { useBlogsContext } from '../../Context/BlogContext'
import { NavLink } from 'react-router-dom';
import Loder from '../Loder/Loder';

export default function Home() {
        const [error  , setError] = useState("")
        const {blogs , setSearchTerm ,   SearchTerm  , fetchSearchBlogs ,blogsLoading , searchLoading } = useBlogsContext()
        const blogLimit  = 6 ;
        const [paginate , setpaginate] = useState(1*blogLimit)
        const paginateHandler = (value) => {setpaginate(value * blogLimit)}
        let numOfPaginate = Math.ceil(blogs.length / 6)
        const Saver = (e) =>{
          e.preventDefault();
          if((e.target.value.replace(/[^\w\s]/gi,"")).length !== 0){
            setSearchTerm(e.target.value);
            setError("");
          } else {
            setError("Invalid search term ...");
          }
        }

        const searchTermHandle = (e)=> {
          e.preventDefault()
          console.log(SearchTerm)
          fetchSearchBlogs(SearchTerm)
        }

        return (
<div className="home">
<div className="static">
    <div className="box">
    <h2>A BEAUTIFUL BLOG WITH NO IMAGES REQUIRED</h2>
<form action="" onSubmit={searchTermHandle} >
    <div className="flex">
        <input type="text" onChange={Saver} />
        <div className="img">
            <button type='submit'>
                <img src="images/search_icon.png" alt="" />
            </button>
        </div>
    </div>
            <h4>{error}</h4>
</form>
    </div>
 </div>

  <h1>Blogs</h1>
  {console.log(SearchTerm)}
  <h2 className='one'>blogs by {SearchTerm === "" ? "all"  : SearchTerm }</h2>
  <div className="container">
  {blogs.slice(paginate-6 , paginate).map((box, index) => {
    return (
      <div className="box" key={index} >
        <h2>{box.title}</h2>
        <p>{box.body.substring(0,60)}...</p>
        <i class="fa-regular fa-face-laugh-beam"></i>
        <span>{box.reactions}</span>
        <div className="tags">
          {box.tags.map((tag , index) =>{
            return  <h3 key={index} >{tag}</h3>
          })}
        </div>
        <NavLink to={`/Singleblog/${box.id}`} >Read more</NavLink>
      </div>
    )
  })}
  </div>
  <div className="paginate">
    {[...Array(numOfPaginate)].map((box , index)=>{
      return <span onClick={()=> paginateHandler(index+1)} key={index} type='button' >{index +1}</span>
    })}
  </div>
  {blogsLoading&& <Loder></Loder>}
 {searchLoading&& <Loder></Loder>}
 
</div>
  )
}
