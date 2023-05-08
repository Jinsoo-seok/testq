// import logo from './logo.svg';
import './App.css';
import Header from "./Header.js"
import Home from './home';
import { BrowserRouter as Router, Route, Switch, Routes } from "react-router-dom";
import NotFound from './NotFound';

function App() {
  return (
      <div className="App" >
          <Router basename="/">
                <Header />
                  <Routes >
                      <Route path="/" element={<Home />}></Route>
                      <Route path="*" element={<NotFound />}></Route>
                  </Routes>

          </Router>
      </div>
  )
}

export default App;
