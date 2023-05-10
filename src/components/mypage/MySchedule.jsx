import React from 'react';
import MyScheduleCard from "./MyScheduleCard";

export default function MySchedule({mySchedule}) {
    return (
        <div>
            <h2 className='text-2xl'>내 일정</h2>
            <ul className='grid grid-cols-1 md:grid-cols-3 gap-4 p-4'>
                {mySchedule &&
                    mySchedule.map((schedule) => (
                        <MyScheduleCard key={schedule.title} schedule={schedule} />)
                    )}
            </ul>
        </div>
    );
}