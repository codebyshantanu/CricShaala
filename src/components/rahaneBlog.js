import React from 'react'
import Navbar from './navbar';
import Image from '../assets/AjinkyaRahane2.png'
import '../components/teamIndia.css';
import Footer from './footer'

const RahaneBlog = () => {



    return (
        <>
            <Navbar></Navbar>

            <br></br>
            <div className='blog-container-main'>
                <div className='blog-content' >
                    <h1>Is time running out for Ajinkya Rahane?</h1>
                    <img src={Image} alt="Team India" />
                    
 <p>Ajinkya Rahane had almost faded away from the Indian cricket scene until his impactful performances for Chennai Super Kings in the Indian Premier League (IPL) caught everyone's attention. Rahane's resurgence earned him a place in the Test side, even for a crucial World Championship final, where he emerged as India's most prolific batsman against Australia at The Oval. However, despite being appointed as vice-captain, Rahane's recent performances in the West Indies have raised concerns about his form and place in the team.
    <div style={{margin : "10px 0"}}>Rahane made a memorable comeback to the Test team during the World Test Championship final against Australia at The Oval. In the first innings, he almost reached a century, playing a crucial role in India's batting lineup. His innings showcased his temperament and ability to perform under pressure. Moreover, his past experience as captain further justified his elevation as vice-captain in the Indian Test team.
    However, his outing against the West Indies has been disappointing. Ajinkya Rahane managed to score only three runs in the first Test in Dominica and could only accumulate eight runs in the first innings of the second Test.

The senior right-handed batter looked shaky during his 36-ball stay in the middle before he inside-edged one into his stumps off Shannon Gabriel's bowling. The ball came in slightly and Rahane tried to defend it but only managed an inside edge.

Rahane was taken aback by the extra pace, and looked stunned after the ball crashed into his stumps.</div>
<div><h3 style={{margin : "10px 0"}}>India Tour of South Africa</h3> India is going to South Africa to play 3 Test Matches. This can be a crucial series for Ajinkya Rahane. He needs to score runs in this series otherwise he can lose his place from the Indian Cricket Test side for a long time. Therefore he needs to have big runs on his name in this series and he knows this. Therefore he will look to perform well and remove the doubts for him from the critic's mind.</div> </p>
            </div>
            </div>
            <Footer></Footer>
        </>
    )
}

export default RahaneBlog;