import React from 'react';
import { Link } from 'react-router-dom';

export default function SubNavbar() {
    return (
        <div className='text-2xl flex mb-3 mt-3'>
            <Link to='/travel' className='mr-4'>
                <h2>여행</h2>
            </Link>
            <Link to='/mate'>
                <h2>메이트</h2>
            </Link>
        </div>
    );
}