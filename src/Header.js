import zIndex from "@mui/material/styles/zIndex"
import React, { useState } from "react"
import styled from "styled-components"
import './css/logo.css'
// import Board from "./Board"
// import BoardCreate from "./BoardCreate"

const HeaderWrapper = styled.div`
  padding: 1.2rem 4rem;
  color: #282c34;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background-color: snow;
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

const Header = () => {
    const [open, setOpen] = useState(false)
    const onToggle = () => setOpen(!open)

    return (
        <>
            <HeaderWrapper>
                <div className="header-title">
                    <img style={{flex: 1}} src="images/logo.png" className="Main-logo" alt="logo" />
                </div>
                <div className="header-menu">
                    <Btn >
                        <p>로그인</p>
                    </Btn>
                </div>
            </HeaderWrapper>

            {/*<div className="header" style={{display:"flex"}}>*/}

            {/*    <div className="header-title" style={{display:"flex"}}>*/}
            {/*        <img src="images/logo.png" className="Main-logo" alt="logo" />*/}
            {/*    </div>*/}

            {/*    <div className="header-menu" style={{display:"flex"}}>*/}
            {/*        <Btn >*/}
            {/*            <p>로그인</p>*/}
            {/*        </Btn>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </>
    )
}

export default Header