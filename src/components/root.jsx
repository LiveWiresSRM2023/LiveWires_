import React from 'react';
import Navbar from './navbar';
import Hero from './hero';
import About from './about';
import Events from './events';
import Divisions from './divisions';
import Projects from './projects';
import Contact from './contact';
import Testimonials from './testimonials';
import Sponsors from './sponsors';
import Footer from './footer';
import Team from './team';



function Root() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About/>
      <Events/>
      <Divisions/>
      <Projects/>
      <Team/>
      <Contact/>
      <Testimonials/>
      <Sponsors/>
      <Footer/>
    </div>
  );
}

export default Root;
