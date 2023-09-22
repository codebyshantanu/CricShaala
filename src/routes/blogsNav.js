import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import HeroImage2 from '../components/heroimg2';
import Blogs from '../components/blogs';

const CricBlog = () => {
    return(
        <>
        <Navbar></Navbar>
        <HeroImage2 heading ="RECENT HOT TOPICS" text = "Take a look at this blogs below." />
        <Blogs></Blogs>
        <Footer></Footer>
        </>
    )
}


export default CricBlog;