import React from 'react';
import Banner from '../HomeLayOut/Banner';
import TopScholarShip from '../Components/TopScholarShip';
import AllSchoolarship from '../Components/AllSchoolarship';
import Testimonials from '../Components/Testimonials';

const HomePage = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="space-y-12 2xl:space-y-28 py-12 2xl:py-28">
            <TopScholarShip></TopScholarShip>
            <AllSchoolarship></AllSchoolarship>
            <Testimonials></Testimonials>
            </div>
        </div>
    );
};

export default HomePage;