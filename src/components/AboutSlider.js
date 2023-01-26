import React, { useEffect } from 'react';
import './AboutSlider.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import AboutSliderCard from './AboutSliderCard';
import AOS from 'aos'
import "aos/dist/aos.css";

//let { admin} = useSelector(state => state.userAuth)
function AboutSlider() {
    useEffect(()=>{
        AOS.init({
            duration:1000
        });
    })
    return (
        <Carousel showStatus={false} autoplay={true} interval={3000} showThumbs={false} showArrows={false} infiniteLoop={true} showIndicators={false}>

            <AboutSliderCard/>


        </Carousel>

    );
}

export default AboutSlider;