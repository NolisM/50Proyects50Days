import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar'
import LandingPage from './components/landingPage'
import ProyectDay1 from "./components/Proyects/ExpandingCards/proyectDay1"
import ProyectDay2 from "./components/Proyects/ProgressSteps/proyectDay2"
import ProyectDay3 from "./components/Proyects/RotatingNavigationAnimation/proyectDay3"
import HiddenSearch from "./components/Proyects/hiddenSearch/projectDay4"
import Blurryloading from "./components/Proyects/blurryLoading/proyectDay5"
import ScrollAnimation from "./components/Proyects/ScrollAnimation/projectDay6"
import SplitLandingPage from "./components/Proyects/splitLandingPage/projectDay7"
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route exact path='/navbar' element={<Navbar />} />
          <Route exact path='/expandingCards' element={<ProyectDay1 />} />
          <Route exact path='/progressSteps' element={<ProyectDay2 />} />
          <Route exact path='/rotatingNavigation' element={<ProyectDay3 />} />
          <Route exact path='/hiddenSearch' element={<HiddenSearch />} />
          <Route exact path='/blurryLoading' element={<Blurryloading />} />
          <Route exact path='/scrollAnimation' element={<ScrollAnimation />} />
          <Route exact path='/splitLandingPage' element={<SplitLandingPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
