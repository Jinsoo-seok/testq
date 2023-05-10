

export async function getUserInfo(){
    const userInfo = {
        profileImage : "/images/person.jpg",
        nickname : "닉네임테스트",
        tripTemperature : "98",
        email : "cudo123@cudo.co.kr",
        age : "24",
        phoneNumber : "01012345678",
        style : [],
        mbti : "ENFP",
        mySchedule : [{
            thumnail : "/images/beach.jpg",
            title : "부산 바다 여행",
            date : "2023-05-10 ~ 2023-05-11",
            location : "부산",
            content : "부산 2박3일 당일치기 여행입니다.부산 2박3일 당일치기 여행입니다.부산 2박3일 당일치기 여행입니다.부산 2박3일 당일치기 여행입니다.부산 2박3일 당일치기 여행입니다."
        },
        {
            thumnail : "/images/city.jpg",
            title : "서울 여행",
            date : "2023-05-13",
            location : "서울",
            content : "서울로 당일치기 여행 가실 분"
        }
        ],
    }

    return userInfo;
}