import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function SubNavbar() {
    const location = useLocation();

    return (
        <div className='text-2xl flex mb-3 mt-3'>
            <Link to='/travel' className={`mr-4 ${location.pathname === '/travel' ? 'text-purple-500' : 'text-black'}`}>
                <h2>여행</h2>
            </Link>
            <Link to='/mate' className={`mr-4 ${location.pathname === '/mate' ? 'text-purple-500' : 'text-black'}`}>
                <h2>메이트</h2>
            </Link>
        </div>
    );
}
