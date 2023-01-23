import React from 'react';
import './Services.css';
import ServiceCard from './ServiceCard'
import TopicHead from './TopicHead';

//let { admin} = useSelector(state => state.userAuth)
function Services() {

    return (
        <div className='service-section'>
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