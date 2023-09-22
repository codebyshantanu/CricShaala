import React from 'react'
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import HeroImage2 from '../components/heroimg2';
const Aboutus = () => {


    return(
        <>
        <Navbar></Navbar>
        <HeroImage2 heading="WE ARE CRICSHAALA" text = "We provide you blogs about recent hot topics, match prediction and all other things related to cricket."></HeroImage2>
        <Footer></Footer>
        </>
    )
}

export default Aboutus;