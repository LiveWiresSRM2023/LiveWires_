import React, { useEffect } from 'react';
import Navbar from './navbar';
import Hero from './hero';
import About from './about';
import Events from './events';
import Divisions from './divisions';
import Projects from './projects';
import Contact from './contact';
import Testimonials from './testimonials';
import Sponsors from './sponsors';
import Team from './team';
import Footer from './footer';

function Root() {
  return (
    <div id="root" className=''>
      <div className="scroll-smooth"> 
        <Hero id="hero"/>
        <About id="about"/>
        <Events id="events"/>
        <Divisions id="divisions"/>
        <Projects id="projects"/>
        <Team id="team"/>
        <Contact id="contact"/>
        <Testimonials id="testimonials"/>
        <Sponsors id="sponsors"/>
        <Footer/>
      </div>
    </div>
  );
}

export default Root;
