import React from 'react';
import MainLayOut from '../../layout/MainLayOut';
import Banner from './Banner';
import HotJobs from './HotJobs';

const Home = () => {
    return (
        <div>
          <Banner/>
          <HotJobs/>
        </div>
    );
};

export default Home;