import React, { useState } from "react"
import '../css/logo.scss'
import '../css/loginModal.scss'
import Modal from "react-modal";
import { Link } from 'react-router-dom';

Modal.setAppElement("#root");

const Header = () => {
    const [open, setOpen] = useState(false)
    const onToggle = () => setOpen(!open)

    // 팝업창 열림 여부
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

    // 로그인 버튼 클릭 시 팝업창 열기
    const handleLoginButtonClick = () => {
        setIsLoginModalOpen(true);
    };

    // 팝업창 닫기
    const handleCloseModal = () => {
        setIsLoginModalOpen(false);
    };

    const customStyles = {
        content: {
            padding: "24px",
            margin: "auto",
            width: "360px",
            height: "432px",
            backgroundColor: "#fff",
            borderRadius: "6px",
            zIndex: "10",
        },
    };
    return (
        <>
            <header className='flex justify-between border-b border-gray-300 p-2'>
                <div className="header-title">
                    <Link to='/' className='flex items-center text-4xl'>
                        {/*<img style={{flex: 1}} src="images/logo.png" className="Main-logo" alt="logo" />*/}
                        <h2 className='text-2xl'>JusTrip</h2>
                    </Link>
                </div>
                <nav className='flex items-center gap-4 font-semibold'>
                    <div className="header-menu">
                        <button onClick={handleLoginButtonClick}>
                            <p>로그인</p>
                        </button>
                        <Modal style={customStyles} isOpen={isLoginModalOpen} onRequestClose={handleCloseModal}>
                            <img style={{flex: 1}} src="images/logo.png" className="Main-logo" alt="logo" />
                            <div style={{ display: "flex", flexDirection: "column",  }}>
                                <button style={{ margin: "10px 0" }}>SNS 로그인(카카오)</button>
                                <button style={{ margin: "10px 0" }}>SNS 로그인(구글)</button>
                                <button style={{ margin: "10px 0" }}>SNS 로그인(기타1)</button>
                                <button style={{ margin: "10px 0" }}>SNS 로그인(기타2)</button>
                                <button style={{ margin: "10px 0" }}>ID 찾기</button>
                            </div>

                            <button onClick={handleCloseModal}>닫기</button>
                        </Modal>
                        {/*{isPopupOpen && <LoginPopup onClose={handleClosePopup} />}>*/}
                    </div>
                    <Link to='/myPage'>
                        <h2>마이페이지</h2>
                    </Link>
                </nav>
            </header>
        </>
    )
}

export default Header