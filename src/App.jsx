// import logo from './logo.svg';
import './App.css';
import Header from "./common/Header.jsx"
import Home from './page/home';
import Travel from './page/travel/travel';
import Meeting from './page/meeting/meeting';
import { BrowserRouter as Router, Route, Switch, Routes } from "react-router-dom";
import NotFound from './common/exception/NotFound';

function App() {
  return (
      <div className="App" >
          <Router basename="/">
                <Header />
                  <Routes >
                      {/* root */}
                      <Route path="/" element={<Home />}></Route>


                      {/* page */}
                      <Route path="/travel" element={<Travel />}></Route>
                      <Route path="/meeting" element={<Meeting />}></Route>


                      {/* Exception */}
                      <Route path="*" element={<NotFound />}></Route>
                  </Routes>

          </Router>
      </div>
  )
}

export default App;
