import React, { useEffect } from 'react';
import './News.css';
import NewsCard from './NewsCard';
import TopicHead from './TopicHead';
import AOS from 'aos'
import "aos/dist/aos.css";

//let { admin} = useSelector(state => state.userAuth)
function News() {
    useEffect(()=>{
        AOS.init({
            duration:1000
        });
    })

    return (<div className='news' data-aos="fade-up">
    <TopicHead
        headText='LATEST'
        colorText='NEWS' />

    <div className='wrapper'>
        <NewsCard/>
        <NewsCard/>
        <NewsCard/>
        <NewsCard/>


    </div>

</div> );
}

export default News;