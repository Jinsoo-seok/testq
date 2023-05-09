import React from 'react';
import styled from "styled-components"

const Btn = styled.button`.login-popup {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;

& > div {
        background-color: #fff;
        padding: 20px;
        border-radius: 5px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    }
}
`


const LoginPopup = ({ onClose }) => {
    return (
        <div>
            <h1>Login Popup</h1>
            <Btn onClick={onClose}>Close</Btn>
        </div>
    );
};

export default LoginPopup;
