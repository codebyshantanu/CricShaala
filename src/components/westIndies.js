import React from 'react'
import Navbar from './navbar';
import Image from '../assets/WI-W vs EN-W Dream11 Prediction, Fantasy Cricket Tips, Dream11 Team, Playing XI, Pitch Report___.jfif'
import '../components/teamIndia.css';
import Footer from './footer'
const WestIndiesBlog = () => {



    return (
        <>
            <Navbar></Navbar>

            <br></br>
            <div className='blog-container-main'>
                <div className='blog-content' >
                    <h1>Fate of West Indies Cricket Team</h1>
                    <img src={Image} alt="Team India" />
                    <p>The journey began with the World Cup 2023 qualifiers, a crucial tournament where teams from around the world vied for a spot in the prestigious event. West Indies entered the qualifiers with high hopes, backed by a talented squad. However, their performance in the tournament was far from what fans had anticipated.

One of the glaring issues that plagued the West Indies team was their bowling. Despite possessing some exceptional bowlers, they struggled to contain opposition batsmen. Inconsistencies in line and length, as well as a lack of effective strategies, contributed to their downfall.
<div style={{margin:"10px 0"}} >Just when the disappointment of the World Cup qualifiers had settled in, West Indies found themselves facing a formidable opponent in India. Although India was missing some of its big names like Virat Kohli and Rohit Sharma, they remained a force to be reckoned with.

In a surprising turn of events, West Indies rose to the occasion and displayed a remarkable performance in the ODI series against India. The West Indies team showed resilience and determination, putting up a fight that left fans in awe. They won the series, defying expectations and earning a well-deserved victory.</div>
<div>While the victory against India brought a sense of redemption and pride to the West Indies cricket community, it was bittersweet. The team had shown their potential and ability to compete at the highest level, but it was too late to secure a spot in the World Cup.

The road to the World Cup 2023 had come to an end for West Indies, leaving them on the outside looking in. The disappointment of missing out on cricket's most prestigious event was palpable, but the series victory against India served as a reminder of their capabilities.</div></p>
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}

export default WestIndiesBlog;