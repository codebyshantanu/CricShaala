import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import HeroImage2 from '../components/heroimg2';
import Form from '../components/form';

const Contactus = () => {


    return(
        <>
  <Navbar></Navbar>
  <HeroImage2 heading = "CONTACT US" text = "Tell us about the topic you want us to talk about."></HeroImage2>
  <Form></Form>
  <Footer></Footer>
        </>
    )
}

export default Contactus;