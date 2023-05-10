// import logo from './logo.svg';
import './App.css';
import Header from "./components/Header.jsx"
import Home from './page/home';
import Travel from './page/travel/travel';
import Meeting from './page/meeting/meeting';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NotFound from './page/exception/NotFound';
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import MyPage from "./page/MyPage";
import MateMain from "./page/MateMain";

const queryClient = new QueryClient();
function App() {
  return (
      <QueryClientProvider client={queryClient}>
          <div className="App" >
              <Router basename="/">
                    <Header />
                      <Routes >
                          {/* root */}
                          <Route path="/" element={<Home />}></Route>


                          {/* page */}
                          <Route path="/travel" element={<Travel />}></Route>
                          <Route path="/meeting" element={<Meeting />}></Route>
                          <Route path="/myPage" element={<MyPage />}></Route>
                          <Route path="/mate" element={<MateMain />}></Route>



                          {/* Exception */}
                          <Route path="*" element={<NotFound />}></Route>
                      </Routes>

              </Router>
          </div>
      </QueryClientProvider>
  )
}

export default App;
