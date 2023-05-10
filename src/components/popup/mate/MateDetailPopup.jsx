import React, {useState} from 'react';

import Button from "../../ui/Button";
export default function MateDetailPopup(props) {
    const [isOpen, setIsOpen] = useState(false);

    // 팝업창 열기
    const onMatePopup = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <Button onClick={onMatePopup} text='메이트 상세 임시 버튼'></Button>
            { isOpen && (
                <div className='w-1/2 h-1/3 fixed left-1/3 top-1/4 items-center border-2 md:w-1/3 overflow-auto'>
                    <div className='bg-white rounded'>
                        <div className='border-b px-4 py-2 flex justify-between items-center'>
                            <h3 className='text-xl left-0'>메이트 정보</h3>
                            <button onClick={onMatePopup}>X</button>
                        </div>
                        <div className='my-5'>
                            <img className='rounded-full w-48 h-48 ml-56' />
                        </div>
                        <div>


                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
