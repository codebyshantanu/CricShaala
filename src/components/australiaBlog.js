import React from 'react'
import Navbar from './navbar';
import Image from '../assets/16Aussies-group-1.webp'
import '../components/teamIndia.css';
import Footer from './footer'

const AustraliaBlog = () => {



    return (
        <>
            <Navbar></Navbar>

            <br></br>
            <div className='blog-container-main'>
                <div className='blog-content' >
                    <h1>What is happening with Team Australia?</h1>
                    <img src={Image} alt="Team India" />
                    
                    <p>Australia have been bolstered by the return of several important players, including captain Pat Cummins, for the three-match ODI series against India.

Australia were without the services of many of their usual players during the white-ball tour of South Africa as they recovered from injuries sustained during the trying Ashes series and thereafter.

Cummins and Steve Smith were recuperating from wrist injuries while Mitchell Starc experienced soreness in his groin and shoulder upon returning from the UK.Glenn Maxwell, who was initially part of the South Africa tour, had aggravated his ankle while training ahead of the T20I series and then flew back home for the birth of his child. In a massive boost for Australia, Maxwell has been declared fit and will be part of the India tour.

Cameron Green missed three ODIs against South Africa after suffering a concussion in the first game. He returned for the final ODI after following an eight-day concussion protocol and is set to feature against India as well.
<div  style={{margin : "10px 0"}} >Among the most notable omissions are Travis Head and Ashton Agar. Agar had suffered a minor calf tear before the South Africa tour and missed the T20I leg. He featured in the first ODI but was left out of the playing XI for the next two games due to soreness. He flew back to Australia earlier in the week for the birth of his first child.</div>
<div> Regardless of all these things , Australia would like to focus on what's in their hands i.e match preparation and doing the best they can in the upcoming World Cup 2023. Australia is a no doubt a strong team, they certainly know how to tackle with these situations as they've been in situations like this earlier too.</div>
<div> <h3 style={{margin : "10px 0"}} >Australia squad for World Cup 2023</h3> Pat Cummins (c), Sean Abbott, Alex Carey, Nathan Ellis, Cameron Green, Josh Hazlewood, Josh Inglis, Spencer Johnson, Marnus Labuschagne, Mitchell Marsh, Glenn Maxwell, Tanveer Sangha, Matt Short, Steve Smith, Mitchell Starc, Marcus Stoinis, David Warner, Adam Zampa.</div></p>
</div>
            </div>
            <Footer></Footer>
        </>
    )
}

export default AustraliaBlog;