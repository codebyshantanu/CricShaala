import React from 'react'
import "./blogs.css"
import { Link } from 'react-router-dom'
const BlogCard = (props) => {
    return(
        <>
       <div className='blog-card '>
                    <img src={props.imgsrc} alt='image'/>
                    <h2 className='blog-title'>{props.title}</h2>
                    <div className='blog-details'>
                        <p>{props.text}</p>
                        <div className='blog-buttons'>
                            <Link to = {props.path} className= "btn"> View</Link>
                        </div>
        </div>
      
                </div>
               
        </>
    )
}

export default BlogCard;