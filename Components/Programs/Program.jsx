 import React from 'react'
import './Programs.css'
import progarm1 from '../../assets/prg1.jpg'
import progarm2 from '../../assets/prg2.jpg'
import progarm3 from '../../assets/prg3.jpg'
import first1 from '../../assets/education.png'

const Program = () => {
  return (
    <div className='programs'>
        <div className="program">
            <img src={progarm1} alt="" />
            <div className="caption">
                <img src={first1} alt="" />
                <p>Graduation Degree</p>
            </div>
        </div>
        <div className="program">
           <img src={progarm2} alt="" />
           <div className="caption">
                <img src={first1} alt="" />
                <p>Master Degree</p>
            </div> 
        </div>
        <div className="program">
            <img src={progarm3} alt="" />
            <div className="caption">
                <img src={first1} alt="" />
                <p>Post Degree</p>
            </div>
        </div>
    </div>
  )
}

export default Program