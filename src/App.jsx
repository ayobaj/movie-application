import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";

import Footer from "./components/footer/Footer";
import HomePages from "./components/HomePages";
import SinglePage from "./components/Spa/SinglePage";


const App = () => {
  return (
    <div className="bg-[#0B101B] h-full">
      <Router>
        <NavBar/> 
        <Routes>
          <Route path="/" element={<HomePages/>}/>
          <Route path="/SinglePage/:id" element={<SinglePage/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
};

export default App;
