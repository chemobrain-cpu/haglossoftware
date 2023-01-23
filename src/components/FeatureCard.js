import React from 'react';
import './FeatureCard.css';

//let { admin} = useSelector(state => state.userAuth)
function FeatureCard() {

    return (
        <div className='feature-card'>
            <span className='material-icons' style={{ color: 'rgb(26, 42, 114)', fontSize: '5rem' }}>
                settings
            </span>
            <h3>Architect design</h3>
            <p>Lorem ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan</p>

        </div>
    );
}

export default FeatureCard;