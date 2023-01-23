import React from 'react';
import './TopicHead.css';

//let { admin} = useSelector(state => state.userAuth)
function TopicHead({headText,colorText,headColor}) {

    return (
        <div className='header'>
            <div className='header-box'>

            </div>
            <div className='header-text-con'>
                <h2 style={{color:headColor?headColor:'color:rgb(50,50,50)'}}>{headText}</h2>
                <h1 className='text'>{colorText}</h1>

            </div>

        </div>


    );
}

export default TopicHead;