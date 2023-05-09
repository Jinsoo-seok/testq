import styled from "styled-components"
import { Link } from "react-router-dom";
import "../css/home.scss";

const HomeWrapper = styled.div`
  @keyframes smoothAppear {
    from {
      opacity: 0;
      transform: translate3d(0, -100%, 0);
    }
    to {
      opacity: 1;
      transform: translateZ(0);
    }
  }

  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Noto Sans KR", sans-serif;
  span {
    font-size: 2.7rem;
    font-family: "Pacifico", cursive;
  }
`

const HomeTitle = styled.div`
  opacity: 0;
  animation: smoothAppear 1s forwards;
  animation-delay: 0.5s;
  margin: 15px 0;
  font-size: 30px;
  font-weight: bold;
  color: midnightblue;
  span {
    font-size: 40px;
    font-family: "Pacifico", cursive;
  }
`

const HomeContents = styled.div`
  opacity: 0;
  animation: smoothAppear 1s forwards;
  animation-delay: 1s;
  margin: 30px 0;
  font-size: 30px;
  color: #282c34;
`

const AboutProject = styled.div`
  opacity: 0;
  animation: smoothAppear 1s forwards;
  animation-delay: 1.5s;
  margin: 30px 0;
  font-size: 25px;
  color: #282c34;
  text-align: center;
  span {
    font-size: 30px;
    font-weight: bold;
    color: blue;
  }
`

const MyWebsite = styled.div`
  opacity: 0;
  animation: smoothAppear 1s forwards;
  animation-delay: 2s;
  margin: 30px 0;
  text-align: center;
  .my-website-title {
    margin-bottom: 5px;
    font-size: 1.8rem;
    font-weight: bold;
    color: midnightblue;
  }
  a {
    font-size: 30px;
    margin: 0 10px;
  }
`

const leftContent = styled.div`
  opacity: 0;
  animation: smoothAppear 1s forwards;
  animation-delay: 2s;
  margin: 30px 0;
  text-align: left;
`

const Home = () => {
    return (
        <div className="content">
            <Link to="/travel" className = "left">여행</Link>
            <Link to="/meeting" className = "right">모임</Link>
        </div>
    )
}

export default Home