import React from 'react'
import Styles from './Home.Module.css'
import NavBar from './NavBar'
import HeroSection from './HeroSection'
import CardSection from './CardSection'
import Footer from './Footer'

export default function Home() {
  return (
    <div>
        <NavBar></NavBar>
        <HeroSection></HeroSection>
        <CardSection></CardSection>    
        <Footer></Footer>
    </div>
  )
}
