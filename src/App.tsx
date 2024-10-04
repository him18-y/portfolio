import React from 'react';
import { Routes,Route,Link } from 'react-router-dom';
import Top from './pages/homes/top';
import Profile from './pages/homes/plofile';
import Skill from './pages/homes/skill';
import Production from './pages/homes/production';
import Contact from './pages/homes/contact';
import Blog from './pages/homes/blog';
import NoMatch from './pages/nomatch';
import Skill_List from './components/Skill_List';
import About from './components/About';
import HHeader from './components/HHeader';
import Footer from './components/Footer';

const App: React.FC = () =>{
  return(
    <>
      <HHeader />
      <Routes>
        <Route path="/" element={<Top />}/>
        <Route path="/profile" element={<Profile />}/>
        <Route path="/skill" element={<Skill />}/>
        <Route path="/production" element={<Production />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/blog" element={<About />}/>
        <Route path="/*" element={<NoMatch />}/>
      </Routes>
      <Footer />
    </>
  );
};

export default App;