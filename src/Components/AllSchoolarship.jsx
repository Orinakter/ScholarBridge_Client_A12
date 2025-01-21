import React from 'react';
import { Link } from 'react-router';

const AllSchoolarship = () => {
    return (
        <div className='text-center mt-24'>
           <Link to="all-scholarship-page"> <button className='btn bg-[#126e82] text-white font-bold text-2xl '>All Schoolarship</button></Link>
        </div>
    );
};

export default AllSchoolarship;