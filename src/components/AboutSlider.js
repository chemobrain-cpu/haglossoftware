import React from 'react';
import './AboutSlider.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import AboutSliderCard from './AboutSliderCard';

//let { admin} = useSelector(state => state.userAuth)
function AboutSlider() {
    return (
        <Carousel showStatus={false} autoplay={true} interval={3000} showThumbs={false} showArrows={false} infiniteLoop={true}>

            <AboutSliderCard/>


        </Carousel>

    );
}

export default AboutSlider;