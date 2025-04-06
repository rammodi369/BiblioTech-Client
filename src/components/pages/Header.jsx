import React from 'react'
import Navbar from './Navbar'
import Hero from '../components/Hero'
import bgimgae from '../../assets/1.jpg'

function Header() {
  return (
    <div
    className="h-[80vh] bg-cover bg-center"
    style={{ backgroundImage: `url(${bgimgae})` }}
  >
    <div className="flex flex-col h-full">
      <Navbar />
      <Hero />
    </div>
  </div>
  )
}

export default Header