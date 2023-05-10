import React from 'react';

export default function UserInfo({userInfo}) {
    return (
        <>
            <div className='my-5'>
                <img className='rounded-full w-48 h-48 ml-56' src={userInfo.profileImage} alt="" />
                <p>닉네임 : {userInfo.nickname}</p>
                <p>여행온도 : {userInfo.tripTemperature}</p>
            </div>

            <div className='my-3'>
                <p>나이 : {userInfo.age}세</p>
                <p>전화번호 : {userInfo.phoneNumber}</p>
                <p>이메일 : {userInfo.email}</p>
            </div>
        </>
    );
}