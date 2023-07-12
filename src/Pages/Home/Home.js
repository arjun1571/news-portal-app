import React from 'react';
import { useLoaderData } from 'react-router-dom';
import News from '../News/News';

const Home = () => {
    const news = useLoaderData();
    return (
        <div>
            this is home{news.length}
            {
                news.map((data)=> <News key={data._id} data={data}></News>)
            }
        </div>
    );
};

export default Home;