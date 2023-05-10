import {useState} from 'react';
import Button from "../../ui/Button";
import CitySelect from "../../common/CitySelect";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default function MateRegistrationPopup() {

    const [isOpen, setIsOpen] = useState(false);
    // const [isSubmit, setIsSubmit] = useState(false);
    // const [mateInfo, setMateInfo] = useState({})
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    // 팝업창 열기
    const onMatePopup = () => {
        setIsOpen(!isOpen);
    };

    const handleSubmit = (e) => {
      //  setIsSubmit(true);

        e.preventDefault();

    }

    return (
        <>
            <Button onClick={onMatePopup} text='메이드 등록하기'></Button>
            { isOpen && (
                <div className='w-1/2 h-1/3 fixed left-1/3 top-1/4 items-center border-2 md:w-1/3 overflow-auto'>
                    <div className='bg-white rounded'>
                        <div className='border-b px-4 py-2 flex justify-between items-center'>
                            <h3 className='text-xl left-0'>메이트 등록</h3>
                            <button onClick={onMatePopup}>X</button>
                        </div>
                        <form className='flex flex-col px-12' onSubmit={handleSubmit}>
                            <div className='mt-4 mb-3'>
                                <CitySelect className=''/>
                            </div>
                            <div className='flex items-center'>
                                <label htmlFor="startDate" className='mr-2'>시작 날짜 :</label>
                                <DatePicker id="startDate" selected={startDate} onChange={(date) => setStartDate(date)} />
                                <label htmlFor="endDate">종료 날짜 : </label>
                                <DatePicker id="endDate" selected={endDate} onChange={(date) => setEndDate(date)} />
                            </div>
                            <div>
                                <textarea className='border-2 w-full h-48 mb-1 mt-3' name='summary'/>
                            </div>
                            <div className='flex justify-end'>
                                <Button onClick={onMatePopup} text={'취소'}/>
                                <Button text={'등록'}/>

                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}
