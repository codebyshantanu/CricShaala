import React from 'react'
import Navbar from './navbar';
import Image from '../assets/India-team.jpg'
import '../components/teamIndia.css';
import Footer from './footer'
const TeamIndia = () => {



    return (
        <>
            <Navbar></Navbar>

            <br></br>
            <div className='blog-container-main'>
                <div className='blog-content' >
                    <h1>Will Team India turn around things in this WC 2023?</h1>
                    <img src={Image} alt="Team India" />
                    
                    <p>The journey to the 2023 World Cup hasn't been without its ups and downs for Team India. After a successful period leading up to the tournament, including some memorable series wins and a strong performance in the previous World Cup, expectations are sky-high. However, the road hasn't been entirely smooth. Injuries, form fluctuations, and selection debates have added layers of complexity.As the World Cup draws near, fans worldwide will be glued to their screens, cheering for Team India hoping they will perform well in this World Cup. 
                        <div style={{margin : "10px 0"}}>With young promising talents like Shubhman Gill and Ishan Kishan, they would like to give their best. Virat Kohli and Rohit Sharma coming back into the form is a big positive for India, they both have immense amount of experience which nobody can count out. In bowling area , Jasprit Bumrah is coming back into the side which will strenghten the Indian bowling attack and Mohammad Siraj, Kuldeep Yadav and Shardul Thakur are looking impressive too.  Regardless of the outcome, the journey itself is a testament to the passion and dedication that Indian cricketers and their fans bring to the game.</div>  

                    
                        <div><h3 style={{margin:"10px 0"}} >India's World Cup 2023 Squad </h3> The team includes Rohit Sharma , Shubman Gill, Virat Kohli, Shreyas Iyer, Ishan Kishan, KL Rahul, Hardik Pandya, Suryakumar Yadav, Ravindra Jadeja, Axar Patel, Shardul Thakur, Jasprit Bumrah, Mohammed Shami, Mohammed Siraj and Kuldeep Yadav.

</div></p>
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}

export default TeamIndia;