import React from 'react';
import Banner from '../HomeLayOut/Banner';
import TopScholarShip from '../Components/TopScholarShip';
import AllSchoolarship from '../Components/AllSchoolarship';
import Testimonials from '../Components/Testimonials';
import FAQsAndSupport from '../Components/FAQsAndSupport';
import { Helmet } from 'react-helmet';
import ScholarshipDeadline from '../Components/ScholarshipDeadline';
import ScholarshipCompare from '../Components/ScholarshipCompare';
import ScholarshipNewsUpdates from '../Components/ScholarshipNewsUpdates';
import HighImpactScholarship from '../Components/HighImpactScholarship';

const HomePage = () => {
    return (
        <div>
            
            <Banner></Banner>
            <div className="space-y-12 2xl:space-y-28 py-12 2xl:py-28">
            <TopScholarShip></TopScholarShip>
            <AllSchoolarship></AllSchoolarship>
            <ScholarshipCompare></ScholarshipCompare>
            <HighImpactScholarship></HighImpactScholarship>
            <ScholarshipDeadline></ScholarshipDeadline>
            <ScholarshipNewsUpdates></ScholarshipNewsUpdates>
            <Testimonials></Testimonials>
            <FAQsAndSupport></FAQsAndSupport>
            </div>
        </div>
    );
};

export default HomePage;