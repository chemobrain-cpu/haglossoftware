import React from 'react';
import './TestimonyCard.css';

//let { admin} = useSelector(state => state.userAuth)
function TestimonyCard({username,country,imgUrl}) {
    return (
        <div className='testimony-card'>
            <div className='img-con'>
                <img src={imgUrl} />

            </div>

            <div className='username-con'>
                <h1>{username}</h1>

            </div>
            <div className='username-con'>
                <h2>{country}</h2>

            </div>
            <div className='star-con'>
                <span className='material-icons'>
                    star
                </span>
                <span className='material-icons'>
                    star
                </span>
                <span className='material-icons'>
                    star
                </span>
                <span className='material-icons'>
                    star
                </span>
                <span className='material-icons'>
                    star
                </span>
            </div>

            <div className='paragraph-con'>

                <p> Lorem ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan </p>

            </div>

        </div>

    );
}

export default TestimonyCard;