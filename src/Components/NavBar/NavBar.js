import React from 'react'
import { NavLink } from 'react-router-dom'
import { useTypewriter } from 'react-simple-typewriter'


export default function NavBar() {
  const [text] = useTypewriter({
    words : ["Web-Jemy"] , 
    loop : {} , 
    typeSpeed :  200 , 
    deleteSpeed : 150 ,
  })
  return (
<div className="nav">
  <div className="container">
<div className="flex">
  <div className="flex-1">
  <i class="fa-regular fa-folder-open fa-beat-fade"></i>
  <h2><NavLink to={"/"} >Blog</NavLink></h2>
  </div>
<h2>{text}</h2>
</div>
  </div>
</div>
  )
}
