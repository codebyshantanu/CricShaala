import React from 'react'
import Navbar from './navbar';
import Image from '../assets/2615135.jpg'
import '../components/teamIndia.css';
import Footer from './footer'

const KohliBlog = () => {



    return (
        <>
            <Navbar></Navbar>

            <br></br>
            <div className='blog-container-main'>
                <div className='blog-content' >
                    <h1>Was Virat Kohli really out of form?</h1>
                    <img src={Image} alt="Team India" />
                    <p>Since the start of 2020, ironically the same year the world itself started going into a downward spiral, Kohli averages less than 50 in T20Is (49.50), less than 40 in ODIs (39) and less than 30 in Tests (28.14). He has played 62 innings across formats, scoring 20 fifties, making a half-century every 3.1 innings. However, for a long time, experts shied away from saying that he was out of form: he was scoring crucial runs, and his overall impact was also hard to overlook.He was still performing well.
                
<div style={{margin :"10px 0"}} > He was performing well on several occasion. He almost scored fifty in every third ODI he played. Just because he was not scoring centuries that doesn't mean he was out of form. He always looked in good touch while he was batting. The problem was his repeatative mode of dismissals and some poor shot selections but still he was scoring runs, he almost had a average of 43.5 in his so called rough patch. Many in form batsman has such average at their peak, so this is the standard that Kohli has made for himself. The problem with Kohli was his performances in Test Cricket. He was not scoring runs in Test Cricket from a long time, he was averaging below 28.0 since 2020 which is considered as a poor average for a batsman. But people expect him to score runs on every occasion which is not possible. Almost every batsman has been in some rough patches at some point of their career. </div>
<div>Now he has started to score centuries and he's not looking back now. He is scoring runs in all three formats of the game. And with World Cup coming ahead this is a big positive for Team India as everyone knows how dangerous Kohli can be in pressure situations. He would love to win this World Cup and no doubt he's always hungry for scoring runs and winning matches. So let's hope we get to watch Kohli reign in World Cup 2023.</div>
</p>
</div>
            </div>
            <Footer></Footer>
        </>
    )
}

export default KohliBlog;