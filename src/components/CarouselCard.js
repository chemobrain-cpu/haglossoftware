import React from 'react';
import './CarouselCard.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

//let { admin} = useSelector(state => state.userAuth)
function CarouselCard() {
    return (
        <div className='carouselCard' style={{backgroundImage:'url(../tracker4.png)',backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundPosition:'center',backgroundAttachment:'fixed'}}>
            <div className='carouselContent'>
                <h1>Haglos  <span>Tracking</span> Company</h1>
                <p>We provide always our best services for our clients's satisfaction</p>
                <div className='buttonContainer'>
                    <button>get started</button>

                </div>



            </div>
            {/*<img src='../tracker4.png' />*/}

        </div>

    );
}

export default CarouselCard;