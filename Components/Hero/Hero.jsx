import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/aro.png'

const Hero = () => {
  return (
    <div className='hero container'>
        <div className="hero-text">
        <h1>We Ensure better education for a better world</h1>
        <p>Our Ensure-edge curriculam is designed to empower students with the Knownledge , skill,and experience needed to excel in the dynamic field od edction </p>
        <button className='btn'>Expoler More <img src={dark_arrow} alt="" /></button>
        </div>
    </div>
  )
}

export default Hero