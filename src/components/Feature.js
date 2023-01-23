import React from 'react';
import './Feature.css';
import FeatureCard from './FeatureCard'

//let { admin} = useSelector(state => state.userAuth)
function Feature() {

    return (
        <div className='feature-section'>
            <div className='wrapper'>

                <FeatureCard/>
                <FeatureCard/>
                <FeatureCard/>
                <FeatureCard/>

            </div>

        </div>


    );
}

export default Feature;