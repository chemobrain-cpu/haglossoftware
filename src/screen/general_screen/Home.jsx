import React from 'react';
import './Home.css';
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

//let { admin} = useSelector(state => state.userAuth)
function Home() {
    return (
        <>
            <Navigation />
            <Slider />
            <Feature />


            <TopicHead headText='OUR PROFESSIONAL' colorText='SERVICES' />

            <Services />

            <About />

            <Work />
            <Testimony />
            <Recoveries />
            <News />

            <Footer/>



        </>

    );
}

export default Home;