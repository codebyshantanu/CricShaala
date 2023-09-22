import React from 'react'
import Navbar from './navbar';
import Image from '../assets/Kuldeep-Yadav-2.jpg'
import '../components/teamIndia.css';
import Footer from './footer'
const KuldeepBlog = () => {



    return (
        <>
            <Navbar></Navbar>

            <br></br>
            <div className='blog-container-main'>
                <div className='blog-content' >
                    <h1>The Redemption OF Kuldeep Yadav</h1>
                    <img src={Image} alt="Team India" />
                    
                    <p>Kuldeep Yadav’s five-wicket haul against Pakistan was no surprise to those who have been following his journey back to form. The old-school dip, drift, and turn that he so famously brought to the table with his debut have returned to his game, and the result is a bowler who is once again capable of taking wickets in all conditions. Kuleep is looking as a big threat for the oppositions.
                        <div style={{margin:"10px 0"}}>Kuldeep also worked on his accuracy. He wanted to be able to hit the right lengths consistently, and he knew that this would be essential if he wanted to take wickets. He also started to bowl more aggressively, hitting the stumps more often and not giving the batsmen any easy scoring opportunities.

The results of Kuldeep’s hard work have been clear to see. He has been in excellent form since his return to international cricket, and his five-wicket haul against Pakistan was just the latest in a string of impressive performances. He is now back to being one of the world’s leading spinners and will be a key player for India in the upcoming World Cup.

In an interview after the match, Kuldeep spoke about his journey back to form. “It has not been easy,” he said. “But I have worked hard and I am happy that I am finally getting the results. I am confident I can continue performing well and help India win matches.”</div>
<div >Kuldeep Yadav has scripted quite a comeback into the Indian side and looks set to be in the World Cup 2023 squad. With 22 wickets in 11 ODIs, the left-arm wrist-spinner is India’s leading wicket-taker in 2023. He also boasts an economy rate of just 4.87. He's bowling quicker thorugh the air now which is giving batsman less time to predict. Few years ago he got too slow in the air which was giving batsman enough time to pick his deliveries. He is the frontline spinner for Team India in this World Cup therfore he needs to bowl well and Kuldeep would look forward to pick up wickets and bowl econimcally.</div>
                    </p>
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}

export default KuldeepBlog;