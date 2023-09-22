import React from 'react'
import "./blogs.css"

import BlogCard from './blogCardd';
import BlogCardData from './blogcardData';

const Blogs = () => {
    return(
        <>
        <div className='work-container'>
            <h1 className='blog-heading' >Recent Blogs</h1>
            <div className='blog-container'>
       {BlogCardData.map((value , index) => {
        return(
            <BlogCard key = {index} title = {value.title} path = {value.path} text = {value.text} imgsrc ={value.imgsrc} />
        )
       })}
                </div>
            </div>
        </>
    )
}

export default Blogs;