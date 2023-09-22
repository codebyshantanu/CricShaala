import React from 'react'
import "../components/footet.css"
import { FaFacebook, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from 'react-icons/fa';
 const Footer = () => {
    return(
        <>
        <div className='footer'>
            <div className='footer-container'>
                <div className='left'>
<div className='location'>
    <FaHome size = {20} style = {{color : "fff" , marginRight : "2rem" , marginTop : "1rem"}} />
<div>
    <p>FC Road , Pune.</p>
    <p>India.</p>
    </div>

</div>
<div className='phone'>
    <h4><FaPhone size = {20} style = {{color : "fff" , marginRight : "1.5rem" } }/> +91 9423700475</h4>
</div>
<div className='email'>
    <h4><FaMailBulk size = {20} style = {{color : "fff" , marginRight : "2rem" , marginTop : "0.5rem"}}/> jadhaoshantanu37@gmail.com</h4>
</div>

                </div>
                <div className='right'>
                    <h4> About the Company</h4>
                    <p>This is a cricket blogging site. We provide your live cricket scores and updates and opinions about latest cricket hot topics.</p>
                    <div className='social'>
                    <FaFacebook size = {20} style={{color : "fff" , marginRight:"1rem"}}/>
                    <FaInstagram size = {20} style={{color : "fff" , marginRight:"1rem"}}/>
                    <FaTwitter size = {20} style={{color : "fff" , marginRight:"1rem"}}/>
                    <FaLinkedin size = {20} style={{color : "fff" , marginRight:"1rem"}}/>
                </div>
                </div>
               
            </div>
        </div>
        </>
    )
 }

 export default Footer;