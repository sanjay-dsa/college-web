import React from 'react'
import './About.css'
import Vio from '../../assets/viode.png'
import vioimg from '../../assets/vioimg.webp'

const About = () => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={vioimg} alt="" className='about-img'/>
            <img src={Vio} alt="" className='play-icon' />
        </div>
        <div className="about-right">
            <h3>ABOUT UNIVERSITY</h3>
            <h2>Nurturing Tomorrow's Leadera Today</h2>
            <p>Embark on a transformating educational journey with our
              university is comphersive edcation progarm. Our-egde
              curriculam is designed to empower students with the knowlege,
              Skill, and experience needed too excel in the dynamic field of
              education.
            </p>
            <p>With a focus on innovation, hands-on Learning,and personalized
              metorship,our program prepare aspiring edcator to make 
              meanigful,our program clasrooms,schools,and communication.
            </p>
            <p>Whether you aspire to become a teacher ,adminsration,
              counsleor ,or educational leader,our diverse range of prorams
            </p>
        </div>
    </div>
  )
}

export default About