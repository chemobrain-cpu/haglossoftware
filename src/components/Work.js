import React, { useEffect } from 'react';
import './Work.css';
import TopicHead from './TopicHead';
import WorkCard from './WorkCard';
import AOS from 'aos'
import "aos/dist/aos.css";


function Work() {
    useEffect(()=>{
        AOS.init({
            duration:1000
        });
    })

    return (<div className='work' data-aos="fade-up">
    <div className='work-head'>
        <div className='left'>
            <TopicHead headText='SEE OUR' colorText='WORK' headColor='#fff' />

        </div>
        <div className='right'>
            <button>View all</button>

        </div>


    </div>
    <div className='work-image-wrapper'>
        
        <WorkCard/>
        <WorkCard/>
        <WorkCard/>
        <WorkCard/>


    </div>

</div>

    );
}

export default Work;