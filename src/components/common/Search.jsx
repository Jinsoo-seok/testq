import React from 'react';
import CitySelect from "./CitySelect";
import MbtiSelect from "./mbtiSelect";

export default function Search(props) {
    return (
        <>
            <div className='flex items-center space-x-2 mb-3 mt-4'>
                <CitySelect />
                <MbtiSelect />
                <button>검색</button>
            </div>
        </>
    );
}