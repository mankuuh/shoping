import React from 'react'
import TopStrip from '../components/TopStrip'
import Navbar from '../components/Navbar' 
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import GridSection from '../components/GridSection'
import Features from '../components/Features'
import FitGuide from '../components/FitGuide'
import EmailSubscribtions from '../components/EmailSubscribtions'
import footerColumns from '../components/footerColumns '

function Home() {
  return (
    <div>
      
        <TopStrip/>
        <Navbar/>
        <EmailSubscribtions/>
        <Hero/>
        <Banner/>
        <GridSection/>
        <FitGuide/>
        <Features/>
        <footerColumns/>
        
    </div>
  )
}
export default Home