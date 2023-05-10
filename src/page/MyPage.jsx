import React from 'react';
import UserInfo from "../components/mypage/UserInfo";
import useUserInfo from "../hooks/useUserInfo";
import MySchedule from "../components/mypage/MySchedule";

export default function MyPage() {

    const {userInfoQuery : {error, data: userInfo}} = useUserInfo();

    return (
        <>
            {error && <p>{error}</p>}
            <section className='w-full text-center'>
                <h1>My Page</h1>
                <h2>프로필 정보</h2>
                {userInfo &&  <UserInfo userInfo={userInfo}/>}

                <div className='my-3'>
                    <p>선호 스타일</p>
                    <p>MBTI</p>
                    <p>자기소개</p>
                </div>

                {userInfo && <MySchedule mySchedule={userInfo.mySchedule} /> }
            </section>
        </>


    );
}