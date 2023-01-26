import React, { useEffect } from 'react';
import './Services.css';
import ServiceCard from './ServiceCard'
import AOS from 'aos'
import "aos/dist/aos.css";

//let { admin} = useSelector(state => state.userAuth)
function Services() {
    useEffect(()=>{
        AOS.init({
            duration:1000
        });
    })

    return (
        <div className='service-section' data-aos="fade-up">
            <div className='wrapper'>

                <div className='card-container'>

                <ServiceCard/>
                <ServiceCard/>
                <ServiceCard/>
                <ServiceCard/>
                <ServiceCard/>
                <ServiceCard/>

                </div>







            </div>

        </div>


    );
}

export default Services;