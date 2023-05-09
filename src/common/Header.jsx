import zIndex from "@mui/material/styles/zIndex"
import React, { useState } from "react"
import styled from "styled-components"
import '../css/logo.scss'
import '../css/loginModal.scss'
import LoginPopup from '../common/popup/loginPopup';
import LoginPopupModal from '../common/modalPopup/loginPopupModal';
import Modal from "react-modal";
import { ReactComponent as XIcon } from '../common/svg/x-icon.svg';
import { Link } from 'react-router-dom';

Modal.setAppElement("#root");

const HeaderWrapper = styled.div`
  padding: 1.2rem 4rem;
  color: #282c34;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background-color: darkslategray;
  border-radius: 10px;
  .header-title {
    span {
      font-size: 3rem;
      display: flex;
      align-items: center;
      font-family: "Pacifico", cursive;
    }
  }
  .header-menu {
    display: flex;
    flex-wrap: wrap;
    .sign-in-modal {
        padding: 24px;
        margin: auto;
        width: 360px!important;
        height: 432px;
        background-color: #fff;
        border-radius: 6px;
        z-index: 10;
    }
  }
`

const Btn = styled.button`
  border-radius: 30px;
  margin-right: 30px;
  color: #333;
  background-color: #fff;
  p {
    list-style: none;
    margin: 0;
    padding: 0;
    text-decoration-line: none;
    font-weight: bold;
    font-size: 1.5rem;
    font-family: "Noto Sans KR", sans-serif;
    flex-shrink: 0;
    margin: 0 1rem;
  }
  :hover {
    color: #333;
    background-color: pink;
    cursor: pointer;
  }
`

const XIconWrapper = styled.div`
  display: inline-block;
  position: absolute;
  top: 0;
  right: 0;
  width: 16px;
  height: 16px;
  cursor: pointer;

  svg {
    fill: #000;
    transition: fill 0.2s;

    &:hover {
      fill: #333;
    }
  }
`

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

    return (
        <>
            <HeaderWrapper>
                <div className="header-title">
                    <Link to="/">
                    <img style={{flex: 1}} src="images/logo.png" className="Main-logo" alt="logo" />
                    </Link>
                </div>
                <div className="header-menu">
                    <Btn onClick={handleLoginButtonClick}>
                        <p>로그인</p>
                    </Btn>
                    <Modal style={customStyles} isOpen={isLoginModalOpen} onRequestClose={handleCloseModal}>
                        <XIconWrapper>
                            <XIcon onClick={handleCloseModal}></XIcon>
                        </XIconWrapper>
                        <img style={{flex: 1}} src="images/logo.png" className="Main-logo" alt="logo" />
                        <div style={{ display: "flex", flexDirection: "column",  }}>
                            <button style={{ margin: "10px 0" }}>SNS 로그인(카카오)</button>
                            <button style={{ margin: "10px 0" }}>SNS 로그인(구글)</button>
                            <button style={{ margin: "10px 0" }}>SNS 로그인(기타1)</button>
                            <button style={{ margin: "10px 0" }}>SNS 로그인(기타2)</button>
                            <button style={{ margin: "10px 0" }}>ID 찾기</button>
                        </div>


                        {/*<button onClick={handleCloseModal}>닫기</button>*/}
                    </Modal>
                {/*{isPopupOpen && <LoginPopup onClose={handleClosePopup} />}>*/}
                </div>
            </HeaderWrapper>
        </>
    )
}

export default Header