// import Home from './components/Home/Home';
// import './App.css';
// import { Route, Routes, useRoutes } from 'react-router-dom';
// import ReactDOM from 'react-dom';
// import { BrowserRouter } from 'react-router-dom';
// import Works from './components/Works/Works';
// import Curriculum from './components/Curriculum/Curriculum';
// import About from './components/AboutMe/aboutMe';
// import Skills from './components/Skills/Skills';
// import Contact from './components/Contact/contact';



// function App() {
//   const Routes = useRoutes([


//     <Routes>
//       <Route path="/" element={<Home />} exact />
//       <Route path="/works" element={<Works />} exact />
//       <Route path="/curriculum" element={<Curriculum />} exact />
//       <Route path="/aboutme" element={<About />} exact />
//       <Route path="/skills" element={<Skills />} exact />
//       <Route path="/contact" element={<Contact />} exact />
//     </Routes>


//   ])

// }

// export default App;


import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
} from "react-router-dom";
import Home from './components/Home/Home';
import Works from './components/Works/Works';
import Curriculum from './components/Curriculum/Curriculum';
import About from './components/AboutMe/aboutMe';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/contact';

const Home1 = () => {
  return (
    <Home />
  );
};

const Works2 = () => {
  return (
    <Works />
  );
};

const Curriculum3 = () => {
  return (
    <Curriculum />
  );
};
const About4 = () => {
  return (
    <About />
  );
};
const Skills5 = () => {
  return (
    <Skills />
  );
};
const Contact6 = () => {
  return (
    <Contact />
  );
};
const App = () => {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/works", element: <Works /> },
    { path: "/curriculum", element: <Curriculum /> },
    { path: "/aboutme", element: <About /> },
    { path: "/skills", element: <Skills /> },
    { path: "/contact", element: <Contact /> }
    // ...
  ]);
  return routes;
};

const AppWrapper = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

export default AppWrapper;