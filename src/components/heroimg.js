import React from 'react'
import "./heroimg.css"
import IntroImage from "../assets/heroimage.jpg"
import { Link } from 'react-router-dom'
 const HeroImage = () =>{
return(
    <>
    <div className='hero'>
        <div className='mask'>
<img className='intro-img' src={IntroImage} alt='IntroImage' />
        </div>
        <div className='content'>
<p>We are CricShaala</p>
<h1>Cricket Blogs and Reviews</h1>
<div>
<Link to="./blogs" className='btn'>Blogs</Link>
        <Link to="./contactus" className='btn btn-light'>Suggestions</Link>
        </div>
        </div>
       
    </div>
    </>
)
 }

 export default HeroImage;