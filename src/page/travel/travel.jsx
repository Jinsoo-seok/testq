import React, { useState } from "react";
import { AutoSizer, List } from "react-virtualized";
import SubNavbar from "../../components/SubNavbar";
import CitySelect from "../../components/common/CitySelect";
import MbtiSelect from "../../components/common/mbtiSelect";

const data = [
    {
        id: 1,
        title: "Lorem Ipsum",
        location1: "서울특별시",
        location2: "강남구",
        startDate: "2023-06-01",
        endDate: "2023-06-05",
        keyword: "여름방학",
        mbti: "ENFJ",
    },
    {
        id: 2,
        title: "Lorem Ipsum",
        location1: "부산광역시",
        location2: "해운대구",
        startDate: "2023-06-02",
        endDate: "2023-06-05",
        keyword: "해외여행",
        mbti: "ISTJ",
    },
    // ...
];


const Travel = () => {
    const [filters, setFilters] = useState({
        location1: "",
        location2: "",
        startDate: "",
        endDate: "",
        keyword: "",
        mbti: "",
    });

    const [searchResults, setSearchResults] = useState([]);

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters({ ...filters, [name]: value });
    };

    const handleSearchClick = () => {
        console.log("click");

        const { location1 } = filters;
        // const results = data.filter((item) => item.location.includes(location1));
        const results = data.filter((item) => (filters.location1 ? results.location.includes(filters.location1) : true));
        console.log(results);

        // (filters.location1 ? result.location.includes(filters.location1) : true)
        // 필터값을 이용해서 검색결과를 찾고 setSearchResults에 결과를 저장합니다.
        setSearchResults(data); // 임시로 data를 반환하는 예시입니다.
    };

    const rowRenderer = ({ index}) => {
        const result = searchResults[index];
        return (
            <div>
                <div>{result.title}</div>
                <div>{result.location1}</div>
                <div>{result.location2}</div>
                <div>{result.startDate}</div>
                <div>{result.endDate}</div>
                <div>{result.keyword}</div>
                <div>{result.mbti}</div>
            </div>
        );
    };

    return (
        <div>
            <div>
                <SubNavbar />
            </div>
            <div style={{ border: '1px solid black', borderRadius: '10px' }}>
                <CitySelect />
                <MbtiSelect />
                <button onClick={handleSearchClick}>검색</button>


                <div>
                    {searchResults.length <= 0
                        ? <div>
                            no search data
                        </div>
                        : <div>
                            {searchResults[0].id}
                        </div>

                    }
                </div>


            </div>

            <div>
                <AutoSizer>
                    {({ width, height }) => (
                        <List
                            width={width}
                            height={height}
                            rowHeight={100}
                            rowCount={searchResults.length}
                            rowRenderer={rowRenderer}
                        />
                    )}
                </AutoSizer>
            </div>
        </div>
    );
}

export default Travel