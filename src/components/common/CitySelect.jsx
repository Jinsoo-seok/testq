import React, {useEffect, useState} from 'react';

export default function CitySelect() {

    const [data, setData] = useState([]);
    const [selectedRegion, setSelectedRegion] = useState('');
    const [subRegions, setSubRegions] = useState([]);

    useEffect(() => {
        fetch('/onlyRegion.json')
            .then(response => response.json())
            .then(jsonData => setData(jsonData))
            .catch(error => console.error(error));
    }, []);

    const handleRegionChange = (event) => {
        setSelectedRegion(event.target.value);
    }

    useEffect(() => {
        if (selectedRegion === '') {
            setSubRegions([]);
        } else {
            const subRegionList = data.find(item => item[selectedRegion]);
            setSubRegions(subRegionList[selectedRegion]);
        }
    }, [selectedRegion, data]);

    return (
        <div>
            <label htmlFor="region">지역 : </label>
            <select id="region" onChange={handleRegionChange} className='mr-2 border-border-gray-300 rounded-md px-2'>
                <option value="">지역</option>
                {data.map(item => (
                    <option key={Object.keys(item)[0]} value={Object.keys(item)[0]}>
                        {Object.keys(item)[0]}
                    </option>
                ))}
            </select>

            <label htmlFor="sub-region">상세 : </label>
            <select id="sub-region" disabled={subRegions.length === 0}>
                <option value="">상세</option>
                {subRegions.map((subRegion, index) => (
                    <option key={index} value={subRegion}>{subRegion}</option>
                ))}
            </select>
        </div>
    );
}


