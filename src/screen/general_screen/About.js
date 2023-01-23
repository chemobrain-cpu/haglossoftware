import React from 'react';
import './About.css';
import Navigation from '../../components/Navigation';
import Slider from '../../components/Slider';
import Feature from '../../components/Feature';
import Services from '../../components/Services';
import TopicHead from '../../components/TopicHead';
import About from '../../components/About';
import Work from '../../components/Work';
import Testimony from '../../components/Testimony';
import { Recoveries } from '../../components/Recoveries';
import News from '../../components/News';
import Footer from '../../components/Footer';
import AboutSlider from '../../components/AboutSlider';

//let { admin} = useSelector(state => state.userAuth)
function AboutUs() {
    return (
        <>
            <Navigation />
            <AboutSlider />
            <News />

            <Footer/>



        </>

    );
}

export default AboutUs;