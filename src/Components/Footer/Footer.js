import React from 'react'
import { useTypewriter } from "react-simple-typewriter";


export default function Footer() {
const [text] = useTypewriter({
  words : ["Jemy" , "Front End Developer"],
  loop : {} , 
  typeSpeed :  70 , 
  deleteSpeed : 50 ,
})


return (
<div className="footer">
  <h2> Made By  <span>{text}</span></h2>
</div>
  )
}

