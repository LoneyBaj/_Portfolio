import { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar.jsx'
import Hero from '../Components/Hero.jsx'
import Skills from '../Components/Skills.jsx'
import Footer from '../Components/Footer.jsx'
import ProjectCard from '../Components/ProjectCard.jsx'
import POS from '../assets/Images/pos.png'    
import POS2 from '../assets/Images/pos2.png'    
function LandigPage() {
  return (
    <div className='w-screen relative h-screen text-[#ece6d5] overflow-x-hidden'>
      <Navbar />
      <Hero />
      
      <div id="app" className="divider divider-neutral px-8 mt-4"></div>
        <h1 className='text-2xl md:text-3xl font-semibold text-center p-4'>Projects</h1>
        <h1 className='text-md md:text-xl font-semibold text-center'>You might need to wait a little for the website to open!</h1>
        <ProjectCard />
      <div className="divider divider-neutral px-8 mt-4"></div>
        <h1 className='text-2xl md:text-3xl font-semibold text-center p-4'>Skills</h1>
        <Skills />
      <div className="divider divider-neutral px-8 mt-4"></div> 
        <Footer />

    </div>
  )
}

export default LandigPage

