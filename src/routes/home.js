import React from 'react'
import Navbar from '../components/navbar';
import HeroImage from '../components/heroimg';
import Footer from '../components/footer';
import Blogs from '../components/blogs';

const Home = () => {


    return(
        <>
       <Navbar></Navbar>
       <HeroImage></HeroImage>
       <Blogs></Blogs>
       <Footer></Footer>
        </>
    )
}

export default Home;