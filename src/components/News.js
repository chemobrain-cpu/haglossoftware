import React from 'react';
import './News.css';
import NewsCard from './NewsCard';
import TopicHead from './TopicHead';

//let { admin} = useSelector(state => state.userAuth)
function News() {
    return (<div className='news'>
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