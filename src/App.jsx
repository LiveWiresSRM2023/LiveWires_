import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Divisions from './components/divisions';
import Events from './components/events';
import Hero from './components/hero';
import About from './components/about';
import Projects from './components/projects';
import Team from './components/team';
import Contact from './components/contact';
import Testimonials from './components/testimonials';
import Sponsors from './components/sponsors';
import Footer from './components/footer';
import Root from './components/root';
import OngoingEvents from './components/subPages/ongoingEvents';
import PrTeam from './components/subPages/pr';
import IotTeam from './components/subPages/iot';
import CreativesTeam from './components/subPages/creatives';
import TechTeam from './components/subPages/tech';
import LinkTree from './components/linktree';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Root />} />
        <Route path='/hero' element={<Hero />} />
        <Route path='/events' element={<Events />} />
        <Route path='/divisions' element={<Divisions />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/team' element={<Team />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/testimonials' element={<Testimonials />} />
        <Route path='/sponsors' element={<Sponsors />} />
        <Route path='/footer' element={<Footer />} />
        <Route path='/tech' element={<TechTeam/>} />
        <Route path='/creative' element={<CreativesTeam/>} />
        <Route path='/iot' element={<IotTeam />} />
        <Route path='/pr' element={<PrTeam/>} />
        <Route path='/ongoingEvents' element={<OngoingEvents />} />
        <Route path='/recruitmentlinktree' element={<LinkTree />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
