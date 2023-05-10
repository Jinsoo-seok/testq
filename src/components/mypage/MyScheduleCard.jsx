import React from 'react';

export default function MyScheduleCard({schedule : {thumnail, title, date, location, content}}) {
    return (
        <li
            className='rounded-lg shadow-md overflow-hidden cursor-pointer transition-all hover:scale-105'>
            <img className='w-full h-1/2' src={thumnail} alt={title}/>
            <div className='mt-2 px-2 text-lg flex flex-col items-center'>
                <h3 className='truncate'>{title}</h3>
                <p>날짜 : {date}</p>
                <p>여행지 : {location}</p>
                <p className='truncate'>{content}</p>
            </div>
        </li>
    );
}