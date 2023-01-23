import React from 'react';
import './ProgressBar.css';

//let { admin} = useSelector(state => state.userAuth)
function ProgressBar({ about, percent }) {

    return (
        <div className='progress-container'>
            <h3 className='progress-text'>{about}</h3>
            <div className='progressive-bar'>
                <div className='progressive' style={{width:percent}}>
                  {percent}

                </div>

            </div>

        </div>


    );
}

export default ProgressBar;